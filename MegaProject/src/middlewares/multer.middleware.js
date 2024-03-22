// Importing multer for handling file uploads.
import multer from "multer";

// Configuring multer disk storage.
const storage = multer.diskStorage({
    // Function to specify the destination directory for uploaded files.
    destination: function (req, file, cb) {
        cb(null, './public/temp'); // Setting the destination directory as './public/temp'.
    },
    // Function to specify the filename for uploaded files.
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Setting the filename as the original filename of the uploaded file.
    }
});

// Creating an instance of multer with the configured storage settings.
export const upload = multer({ 
    storage, // Using the configured storage settings for file uploads.
});
