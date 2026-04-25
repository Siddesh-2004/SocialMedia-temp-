import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
    return jwt.sign(
        {
            _id: user.userId,           
            email: user.email,
            username: user.userName,
            fullName: user.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
}

export function generateRefreshToken(user) {
    return jwt.sign(
        {
            _id: user.userId,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
}