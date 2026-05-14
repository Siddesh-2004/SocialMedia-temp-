import { eventPostsTable } from "../db/schemas/events.schema.js";
import asyncHandler from "../utils/asynchandler.js";
import ApiError from "../utils/apiErrors.js";
import ApiResponse from "../utils/apiResponse.js"
import { uploadOnCloudinary } from "../services/cloudinary.service.js";
import db from "../db/index.js"
import { eq } from "drizzle-orm";

const createPostEvents = asyncHandler(async (req, res) => {
    const { eventName, description, requirements, regFormLink, contactDetails, LocationDetails, organizerId } = req.body;
    let { maxTeams, participantsPerTeam, eventDateAndTime } = req.body;

    if (!eventName || !description || !eventDateAndTime || !contactDetails || !organizerId) {
        throw new ApiError(400, "All fields are required");
    }
    eventDateAndTime = new Date(eventDateAndTime);
    if (maxTeams) {
        maxTeams = parseInt(maxTeams);
        if (isNaN(maxTeams) || maxTeams < 1) {
            throw new ApiError(400, "Invalid maxTeams value");
        }
    }
    if (participantsPerTeam) {
        participantsPerTeam = parseInt(participantsPerTeam);
        if (isNaN(participantsPerTeam) || participantsPerTeam < 1) {
            throw new ApiError(400, "Invalid participantsPerTeam value");
        }
    }


    if (participantsPerTeam !== undefined && (participantsPerTeam < 1 || !Number.isInteger(participantsPerTeam))) {
        throw new ApiError(400, "Invalid participantsPerTeam value");
    }

    console.log(req.file);
    const brochureImagepath = req.file?.path;

    let brochureImageLink;
    if (brochureImagepath) {

        try {
            const cloudinaryResponse = await uploadOnCloudinary(brochureImagepath);
            brochureImageLink = cloudinaryResponse.secure_url;
        }
        catch (error) {
            throw new ApiError(500, error.message || "Error uploading brochure image");
        }
        if (!brochureImageLink) {
            throw new ApiError(500, "Error uploading brochure image");
        }
    }

    console.log("haiii");
    const newEvent = await db.insert(eventPostsTable).values({
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

    if (!newEvent) {
        throw new ApiError(500, "Error creating event");
    }
    return res.status(201).json(new ApiResponse(201, newEvent, "Event created successfully"));

});


const getAllEvents = asyncHandler(async (req, res) => {

    const events = await db
        .select()
        .from(eventPostsTable);

    return res.status(200).json(
        new ApiResponse(
            200,
            events,
            "All events fetched successfully"
        )
    );

});


const getEventById = asyncHandler(async (req, res) => {

    const eventId = parseInt(req.params.eventId);
    if (isNaN(eventId)) {
        throw new ApiError(400, "Invalid event ID");
    }

    const event = await db
        .select()
        .from(eventPostsTable)
        .where(eq(eventPostsTable.eventId, eventId));

    if (!event || event.length === 0) {
        throw new ApiError(404, "Event not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            event[0],
            "Event fetched successfully"
        )
    );

});

export {
    createPostEvents,
    getAllEvents,
    getEventById
};