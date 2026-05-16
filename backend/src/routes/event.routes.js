import { Router } from "express";
import { createPostEvents,getAllEvents,getEventById,getEventByUserId } from "../controllers/events.controller.js";
import upload from "../middlewares/multer.js";
const router = Router();

router.route("/post").post(upload.single("brochure"), createPostEvents);

router.route("/")
    .get(getAllEvents);

router.route("/user/:userId")
    .get(getEventByUserId);

router.route("/:eventId")
    .get(getEventById);

export default router;