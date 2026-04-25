import { ApiError } from "../utils/apiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import db from "../db/index.js";
import { usersTable } from "../db/schemas/users.js";
import { eq } from "drizzle-orm";

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || 
            req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const users = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.userId, decodedToken._id));

        const user = users[0];

        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        // Strip sensitive fields before attaching to req
        const { password, refreshToken, ...safeUser } = user;
        req.user = safeUser;
        
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});
