import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



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



// User Routes
import userRoutes from './routes/user.routes.js';
app.use("/api/users", userRoutes);
// Event Routes
import eventRouter from "./routes/event.routes.js";
app.use("/api/v1/events", eventRouter);
// Partner Routes
import partnerRouter from "./routes/partner.routes.js";
app.use("/api/v1/partner", partnerRouter);








export default app;