// Importing required modules: mongoose for MongoDB object modeling, Schema for defining schemas, and mongooseAggregatePaginate for pagination support.
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Defining the schema for the video collection in MongoDB.
const videoSchema = new Schema(
    {
        // Video file field storing Cloudinary URLs.
        videoFile: {
            type: String,
            required: true,
        },
        // Thumbnail field storing Cloudinary URLs.
        thumbnail: {
            type: String,
            required: true,
        },
        // Title of the video.
        title: {
            type: String,
            required: true
        },
        // Description of the video.
        description: {
            type: String,
            required: true
        },
        // Duration of the video in seconds.
        duration: {
            type: Number,
            required: true
        },
        // Number of views of the video, defaults to 0.
        views: {
            type: Number,
            default: 0
        },
        // Flag indicating whether the video is published or not, defaults to true.
        isPublished: {
            type: Boolean,
            default: true
        },
        // Reference to the owner (user) of the video.
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User" // Reference to the User model.
        }
    },
    {
        timestamps: true // Automatically add createdAt and updatedAt fields to documents.
    }
)

// Applying mongooseAggregatePaginate plugin for pagination support.
videoSchema.plugin(mongooseAggregatePaginate)

// Exporting the Video model based on the defined schema.
export const Video = mongoose.model("Video", videoSchema)
