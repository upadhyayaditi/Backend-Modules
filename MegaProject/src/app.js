// Importing required modules: express for creating the Express application, cookie-parser for parsing cookies,
// and cors for enabling Cross-Origin Resource Sharing.
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// Creating an Express application.
const app = express();

// Middleware to enable Cross-Origin Resource Sharing (CORS).
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allowing requests from the specified origin.
    credentials: true // Allowing credentials (cookies, authorization headers) to be shared across origins.
}))

// Middleware to parse incoming JSON requests with a limit of 16kb.
app.use(express.json({ limit: "16kb" }));

// Middleware to parse incoming URL-encoded requests with extended mode and a limit of 16kb.
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Middleware to serve static files from the "public" directory.
app.use(express.static("public"));

// Middleware to parse cookies from incoming requests.
app.use(cookieParser());

// Exporting the configured Express application.
export default app;
