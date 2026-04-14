import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORSORIGIN,
    credentials: true,
}));
app.use(express.json({
    limit:"20kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}));
app.use(express.static("public"));

app.use(cookieParser());



import eventRouter from "./routes/event.router.js"
app.use("/api/v1/events", eventRouter);






export default app;



