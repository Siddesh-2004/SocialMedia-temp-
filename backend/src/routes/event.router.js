import { Router } from "express";
import { createPostEvents } from "../controllers/events.controller.js";
import upload from "../middlewares/multer.js";
const router = Router();

router.route("/post").post(upload.single("brochure"), createPostEvents);

export default router;