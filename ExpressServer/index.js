// Importing the Express module
const express = require("express");

// Creating an Express application instance
const app = express();

// Setting up a route for the home page
app.get('/', (req, res) => {
    // Sending a response with the message "Hello From Home Page"
    return res.send("Hello From Home Page")
});

// Setting up a route for the about page
app.get('/about', (req, res) => {
    // Sending a response with the message "Hello from About Page"
    return res.send("Hello from About Page")
});

// Starting the server and listening on port 8000
app.listen(8000, () => console.log("Server Started!"));
