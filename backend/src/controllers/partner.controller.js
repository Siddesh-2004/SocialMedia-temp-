import asyncHandler from "../utils/asynchandler.js";
import ApiError from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js";
import { partnerRequestsTable } from "../db/schemas/partners.shema.js";
import db from "../db/index.js";
import { uploadOnCloudinary } from "../services/cloudinary.service.js";
import { eq } from "drizzle-orm";

const createPartnerRequest = asyncHandler(async (req, res) => {
    const { title, description, skills, membersRequired,lastDate, userId ,contactDetails} = req.body;

    if (!title || !description || !skills || !membersRequired || !userId || !contactDetails) {
        throw new ApiError(400, "title, description, skills, membersRequired, and userId are required");
    }

    if(lastDate && new Date(lastDate) < new Date()){
        throw new ApiError(400, "lastDate must be greater than current date");
    }

    if(membersRequired<1){
        throw new ApiError(400, "membersRequired must be greater than 0");
    }
    const imgPath=req.file?.path;
    let imageLink=null;
    if(imgPath){
        try{
            const cloudinaryResponse=await uploadOnCloudinary(imgPath);
            if(!cloudinaryResponse.secure_url){
                throw new ApiError(500, "Error Generating Cloundinary URL");
            }
            imageLink=cloudinaryResponse.secure_url;
        }
        catch(error){
            throw new ApiError(500, error.message||"Error uploading image");
        }
    }
    const newPartnerRequest = await db.insert(partnerRequestsTable).values({
        title,
        description,
        skills,
        membersRequired,
        imageLink,
        lastDate,
        userId,
        contactDetails
    }).returning();
    if(!newPartnerRequest){
        throw new ApiError(500, "Error creating partner request");
    }
    return res.status(201).json(
        new ApiResponse(
            201,
            newPartnerRequest,
            "Partner request created successfully"
        )
    );
});


const getAllPartnerRequests = asyncHandler(async (req, res) => {
    const partnerRequests = await db
        .select()
        .from(partnerRequestsTable);

    return res.status(200).json(
        new ApiResponse(
            200,
            partnerRequests,
            "All partner requests fetched successfully"
        )
    );
});

const getPartnerRequestById = asyncHandler(async (req, res) => {
    const partnerRequestId = parseInt(req.params.partnerRequestId);
    if (isNaN(partnerRequestId)) {
        throw new ApiError(400, "Invalid partner request ID");
    }

    const partnerRequest = await db
        .select()
        .from(partnerRequestsTable)
        .where(eq(partnerRequestsTable.partnerRequestId, partnerRequestId));

    if (!partnerRequest || partnerRequest.length === 0) {
        throw new ApiError(404, "Partner request not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            partnerRequest[0],
            "Partner request fetched successfully"
        )
    );
});


const getPartnerRequestByUserId = asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
        throw new ApiError(400, "Invalid user ID");
    }

    const partnerRequests = await db
        .select()
        .from(partnerRequestsTable)
        .where(eq(partnerRequestsTable.userId, userId));

    return res.status(200).json(
        new ApiResponse(
            200,
            partnerRequests,
            "Partner requests fetched successfully"
        )
    );
});


export { createPartnerRequest, getAllPartnerRequests, getPartnerRequestById, getPartnerRequestByUserId };