import { Router } from "express";
import { createPartnerRequest } from "../controllers/partner.controller.js";
import upload from "../middlewares/multer.js";
const router = Router();

router.route("/post").post(upload.single("image"), createPartnerRequest);

export default router;