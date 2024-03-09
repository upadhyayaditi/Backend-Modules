const http = require("http"); // Import the 'http' module to create an HTTP server
const fs = require("fs"); // Import the 'fs' module to work with the file system

// Create an HTTP server
const myServer = http.createServer((req, res) => {
    // Generate log message with timestamp and request URL
    const log = `${Date.now()}: ${req.url} New request received\n`;
    
    // Append the log message to a file named 'log.txt'
    fs.appendFile("log.txt", log, (err, data) => {
        // Handle different request URLs
        switch(req.url){
            case "/" :  // If the request URL is '/', respond with "Home Page"
                res.end("Home Page");
                break;
            case "/about" : // If the request URL is '/about', respond with "I am Aditi Upadhyay"
                res.end("I am Aditi Upadhyay");
                break;
            default: // For all other request URLs, respond with "404 Not Found!"
                res.end("404 Not Found!");
        }
    });
});

// Start the server and listen on port 8000
myServer.listen(8000, ()=> console.log("Server Started!"));
