// Importing asyncHandler from "../utils/asyncHandler"
import { asyncHandler } from "../utils/asyncHandler"

// Defining a function called registerUser, which is an async function
const registerUser = asyncHandler( async (req, res) => {
    // Inside the function, setting the response status to 200 and sending a JSON response
    res.status(200).json({
        message: "ok" // Responding with a message "ok"
    })
}) // End of registerUser function definition

export { registerUser }