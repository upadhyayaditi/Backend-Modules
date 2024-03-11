// Require the Express module
const express = require("express");

// Require the user data from a JSON file
const users = require("./MOCK_DATA.json");

// Create an instance of the Express application
const app = express();

// Define the port number
const PORT = 8000;

// Define a route to get all users
app.get("/api/users", (req, res) => {
    // Return all users as JSON
    return res.json(users);
});

// Define routes for individual users by ID
app.route("/api/users/:id")
    // Define a route to get a user by ID
    .get((req, res) => {
        // Extract the ID from the request parameters
        const id = Number(req.params.id);
        // Find the user with the matching ID
        const user = users.find((user) => user.id === id);
        // Return the user as JSON
        return res.json(user);
    })
    // Define a route to update a user by ID (PATCH method)
    .patch((req, res) => {
        // Return a status indicating the update is pending
        return res.json({ status: "pending" });
    })
    // Define a route to delete a user by ID (DELETE method)
    .delete((req, res) => {
        // Return a status indicating the deletion is pending
        return res.json({ status: "pending" });
    });

// Define a route to create a new user (POST method)
app.post("/api/users", (req, res) => {
    // Return a status indicating the creation is pending
    return res.json({ status: "pending" });
});

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server Started at http://localhost:${PORT}`));
