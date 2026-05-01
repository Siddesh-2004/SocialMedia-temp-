import { eventPostsTable } from "../db/schemas/events.schema.js";
import asyncHandler from "../utils/asynchandler.js";
import ApiError from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js"
import {uploadOnCloudinary} from "../services/cloundinary.service.js"
import db from "../db/index.js"

const createPostEvents=asyncHandler(async (req, res) => {
    const { eventName, description, requirements, regFormLink, contactDetails, LocationDetails, organizerId} = req.body;
    let { maxTeams,participantsPerTeam ,eventDateAndTime} = req.body;
    
    if(!eventName ||!description||!eventDateAndTime||!contactDetails||!organizerId){
        throw new ApiError(400, "All fields are required");
    }
    eventDateAndTime=new Date(eventDateAndTime);
    if(maxTeams){
        maxTeams = parseInt(maxTeams);
        if(isNaN(maxTeams) || maxTeams < 1){
            throw new ApiError(400, "Invalid maxTeams value");
        }
    }
    if(participantsPerTeam){
        participantsPerTeam = parseInt(participantsPerTeam);
        if(isNaN(participantsPerTeam) || participantsPerTeam < 1){
            throw new ApiError(400, "Invalid participantsPerTeam value");
        }
    }


    if(participantsPerTeam !== undefined && (participantsPerTeam < 1 || !Number.isInteger(participantsPerTeam))){
        throw new ApiError(400, "Invalid participantsPerTeam value");
    }

    console.log(req.file);
    const brochureImagepath = req.file?.path;

    let brochureImageLink;
   if(brochureImagepath){
    
    try{
        const cloudinaryResponse=await uploadOnCloudinary(brochureImagepath);
        brochureImageLink=cloudinaryResponse.secure_url;
    }
    catch(error){
        throw new ApiError(500,error.message || "Error uploading brochure image");
    }
    if(!brochureImageLink){
        throw new ApiError(500, "Error uploading brochure image");
    }
   }
    
    console.log("haiii");
    const newEvent=await db.insert(eventPostsTable).values({
        eventName,
        maxTeams,
        participantsPerTeam,
        description,
        requirements,
        eventDateAndTime,
        regFormLink,
        contactDetails,
        LocationDetails,
        organizerId,
        brochureImageLink
    }).returning();
    
    if(!newEvent){
        throw new ApiError(500, "Error creating event");
    }
    return res.status(201).json(new ApiResponse(201, newEvent, "Event created successfully"));

});

export { createPostEvents };