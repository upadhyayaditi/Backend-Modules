// Importing dotenv to load environment variables from a .env file,
// and connectDB function to establish a connection to the MongoDB database.
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Loading environment variables from a .env file located at './env'.
dotenv.config({
    path: './env'
})

// Calling the connectDB function to establish a connection to the MongoDB database.
connectDB()
    .then(() => {
        // Starting the Express server and listening on the specified port or default port 8000.
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        // Logging an error message if MongoDB connection fails.
        console.log("Mongo DB connection failed!!, error");
    })
