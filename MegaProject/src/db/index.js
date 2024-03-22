// Importing mongoose for MongoDB connection and DB_NAME constant from constants.js file.
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Function to connect to the MongoDB database.
const connectDB = async () => {
    try {
        // Connecting to the MongoDB database using the provided MONGODB_URL and DB_NAME.
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        
        // Logging a successful connection message along with the host information.
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Logging an error message if connection fails and exiting the process.
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

// Exporting the connectDB function to make it accessible from other modules.
export default connectDB;
