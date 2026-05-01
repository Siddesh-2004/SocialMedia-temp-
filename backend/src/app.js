import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from './routes/user.routes.js';
import eventRouter from "./routes/event.router.js";

const app = express();

app.use(cors({
    origin: process.env.CORSORIGIN,
    credentials: true,
}));

app.use(express.json({
    limit: "20kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}));

app.use(express.static("public"));

app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/v1/events", eventRouter);

// Default route
app.use("/", (req, res) => {
    res.send("Social Media backend API is running!");
});

export default app;