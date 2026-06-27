import { Router } from "express";
import { createPartnerRequest,getAllPartnerRequests,getPartnerRequestById,getPartnerRequestByUserId } from "../controllers/partner.controller.js";  
import upload from "../middlewares/multer.js";
const router = Router();

router.route("/post").post(upload.single("image"), createPartnerRequest);
router.route("/getAll").get(getAllPartnerRequests);
router.route("/:partnerRequestId").get(getPartnerRequestById);
router.route("/user/:userId").get(getPartnerRequestByUserId);
export default router;