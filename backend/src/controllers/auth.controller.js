import  asyncHandler from '../utils/asynchandler.js';
import { ApiError } from '../utils/apiErrors.js';
import ApiResponse from '../utils/apiResponse.js';
import db from '../db/index.js';
import { usersTable } from '../db/schemas/users.js';
import { sql } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;

// --- REGISTER ---
export const registerUser = asyncHandler(async (req, res) => {
    const { email, fullName, userName, password } = req.body;

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

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await db
        .insert(usersTable)
        .values({
            email,
            fullName,
            userName,
            password: hashedPassword,
        })
        .returning({
            userId: usersTable.userId,
            email: usersTable.email,
            fullName: usersTable.fullName,
            userName: usersTable.userName,
            profilePhotLink: usersTable.profilePhotLink,
        });

    if (!newUser || newUser.length === 0) {
        throw new ApiError(500, "User creation failed");
    }

    const user = newUser[0];

    return res.status(201).json(
        new ApiResponse(201, "User registered successfully", {
            userId: user.userId,
            email: user.email,
            fullName: user.fullName,
            userName: user.userName,
            profilePhotLink: user.profilePhotLink,
        })
    );
});

// --- LOGIN ---
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password required");
    }

    const users = await db
        .select()
        .from(usersTable)
        .where(sql`${usersTable.email} = ${email}`);

    if (users.length === 0) {
        throw new ApiError(404, "User not found");
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials");
    }

    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new ApiError(500, "JWT secret not set");
    }

    const token = jwt.sign(
        {
            userId: user.userId,
            email: user.email,
            userName: user.userName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "15m" }
    );

    return res.status(200).json(
        new ApiResponse(200, "Login successful", {
            user: {
                userId: user.userId,
                email: user.email,
                fullName: user.fullName,
                userName: user.userName,
                profilePhotLink: user.profilePhotLink,
            },
            accessToken: token,
        })
    );
});