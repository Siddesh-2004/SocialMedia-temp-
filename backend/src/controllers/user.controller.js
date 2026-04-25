import asyncHandler from '../utils/asynchandler.js';
import { ApiError } from '../utils/apiErrors.js';
import ApiResponse from '../utils/apiResponse.js';
import db from '../db/index.js';
import { usersTable } from '../db/schemas/users.js';
import { sql, eq, or } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { uploadOnCloudinary } from '../services/cloudinary.service.js';
import { generateAccessToken, generateRefreshToken } from "../utils/tokenUtils.js";
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const users = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.userId, userId));

        const user = users[0];
        if (!user) throw new ApiError(404, "User not found");

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // Save refreshToken to DB
        await db
            .update(usersTable)
            .set({ refreshToken })
            .where(eq(usersTable.userId, userId));

        return { accessToken, refreshToken };
    } catch (err) {
        throw new ApiError(500, "Something went wrong while generating tokens");
    }
};

// --- REGISTER ---
export const registerUser = asyncHandler(async (req, res) => {
    const {
        email,
        fullName,
        userName,
        password,
        interests,
        githubRepoLink,
        portfolioLink,
    } = req.body;

    if (!email || !fullName || !userName || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUsers = await db
        .select()
        .from(usersTable)
        .where(sql`${usersTable.email} = ${email} OR ${usersTable.userName} = ${userName}`);

    if (existingUsers.length) {
        throw new ApiError(409, "User already exists");
    }


    const profilePhotoLocalPath = req.file?.path;


    if (!profilePhotoLocalPath) {
        throw new ApiError(400, "Profile photo file is required");
    }

    const uploaded = await uploadOnCloudinary(profilePhotoLocalPath);
    const profilePhotoLink = uploaded?.url;

    // Parse interests string into array
    const interestsArray = interests
        ? (typeof interests === 'string' ? interests.split(',').map(i => i.trim()) : interests)
        : [];

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await db
        .insert(usersTable)
        .values({
            email,
            fullName,
            userName,
            password: hashedPassword,
            interests: interestsArray,
            githubRepoLink: githubRepoLink || null,
            portfolioLink: portfolioLink || null,
            profilePhotoLink: profilePhotoLink || null,
        })
        .returning({
            userId: usersTable.userId,
            email: usersTable.email,
            fullName: usersTable.fullName,
            userName: usersTable.userName,
            interests: usersTable.interests,
            githubRepoLink: usersTable.githubRepoLink,
            portfolioLink: usersTable.portfolioLink,
            profilePhotoLink: usersTable.profilePhotoLink,
        });


    if (!newUser || newUser.length === 0) {
        throw new ApiError(500, "User creation failed");
    }


    const user = newUser[0];
    console.log("Newly registered user:", user);

    return res.status(201).json(
        new ApiResponse({
            user: user
        }, "User registered successfully", 201)
    );

});

// --- LOGIN ---
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password, userName } = req.body;

    if ((!email && !userName) || !password) {
        throw new ApiError(400, "Email or username and password required");
    }
    // Single query — fetch WITH password for comparison
    const users = await db
        .select()
        .from(usersTable)
        .where(
            or(
                email ? eq(usersTable.email, email) : undefined,
                userName ? eq(usersTable.userName, userName) : undefined
            )
        );

    const user = users[0];

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials");
    }

    // Strip sensitive fields AFTER comparison, before sending to client

    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new ApiError(500, "JWT secret not set");
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user.userId);
    const { password: _password, refreshToken: _refreshToken, ...loggedInUser } = user;
    // password and refreshToken are extracted but not sent — loggedInUser is clean

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully",
                200
            )
        )

});


export const logoutUser = asyncHandler(async (req, res) => {
    await db
        .update(usersTable)
        .set({ refreshToken: null })
        .where(eq(usersTable.userId, req.user.userId));

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, "User logged out successfully", {}));
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const users = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.userId, decodedToken.userId));

        const user = users[0];

        if (!user) {
            throw new ApiError(401, "Invalid refresh token");
        }

        // Check if incoming token matches the one stored in DB
        if (incomingRefreshToken !== user.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used");
        }

        // Generate new tokens
        const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshTokens(user.userId);

        const options = {
            httpOnly: true,
            secure: true,
        };

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(200, "Access token refreshed", {
                    accessToken,
                    refreshToken: newRefreshToken,
                })
            );
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});