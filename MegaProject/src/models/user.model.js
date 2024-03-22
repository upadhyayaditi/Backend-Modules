// Importing required modules: mongoose for MongoDB object modeling, Schema for defining schemas, Jwt for JSON Web Token functionality, bcrypt for password hashing.
import mongoose, { Schema } from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt"

// Defining the schema for the user collection in MongoDB.
const userSchema = new Schema(
    {
        // Username field with specific properties.
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true // Indexing the username field for faster queries.
        },
        // Email field with specific properties.
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        // Full name field with specific properties.
        fullName: {
            type: String,
            required: true,
            index: true, // Indexing the full name field for faster queries.
            trim: true,
        },
        // Avatar field storing Cloudinary URLs.
        avatar: {
            type: String,
            required: true,
        },
        // Cover image field storing Cloudinary URLs.
        coverImage: {
            type: String,
        },
        // Array to store user's watch history, referencing Video collection.
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        // Password field with specific properties.
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        // Refresh token field.
        refreshToken: {
            type: String,
        }
    },
    {
        timestamps: true // Automatically add createdAt and updatedAt fields to documents.
    }
)

// Middleware to hash the password before saving it.
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10); // Hashing the password with bcrypt.
    next();
})

// Method to compare entered password with hashed password during login.
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// Method to generate an access token for authentication.
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullname // Note: Full name should match the schema field name, which is "fullName".
        },
        process.env.ACCESS_TOKEN_SECRET, // Secret key for signing the token.
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY // Expiry time for the access token.
        }
    )
}

// Method to generate a refresh token for token refreshing.
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET, // Secret key for signing the token.
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY // Expiry time for the refresh token.
        }
    )
}

// Exporting the User model based on the defined schema.
export const User = mongoose.model("User", userSchema)
