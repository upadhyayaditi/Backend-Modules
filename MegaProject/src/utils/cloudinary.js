// Importing the required modules: cloudinary for interacting with the Cloudinary API and fs for file system operations.
import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

// Configuring Cloudinary with the provided credentials from environment variables.
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// Defining an asynchronous function to upload a file to Cloudinary.
const uploadOnCloudinary = async (localFilePath) => {
    try {
        // Checking if a valid local file path is provided.
        if (!localFilePath) return null;
        
        // Uploading the file to Cloudinary using the uploader.upload() method.
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" // Automatically determine the resource type based on the file extension.
        })
        
        // Logging the successful upload and the URL of the uploaded file.
        console.log("file is uploaded on cloudinary", response.url)
        
        // Returning the Cloudinary response.
        return response;
    } catch (error) {
        // If an error occurs during the upload process, delete the local file.
        fs.unlinkSync(localFilePath)
        
        // Returning null to indicate failure.
        return null
    }
}

// Exporting the uploadOnCloudinary function to make it accessible from other modules.
export { uploadOnCloudinary }
