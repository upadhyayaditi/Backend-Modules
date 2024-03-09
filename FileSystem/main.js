// Import the 'fs' module, which provides file system-related functionality
const fs = require("fs");

// Write the string "Hello World!" to a file named 'test.txt' synchronously
fs.writeFileSync("./test.txt", "Hello World!");

// Read the contents of the file 'contact.txt' synchronously, assuming it's encoded as UTF-8
// Note: This line will throw an error because there is no file named 'contact.txt'
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result); // Log the contents of the file to the console

// Read the contents of the file 'contact.txt' asynchronously, assuming it's encoded as UTF-8
// If there's an error reading the file, log "Error" to the console; otherwise, log the file contents
fs.readFile("./contact.txt", "utf-8", (error, result)=> {
    if(error){
        console.log("Error");
    }else{
        console.log(result);
    }
})

// Append the string "This is Aditi Upadhyay" to the end of the file 'test.txt' synchronously
fs.appendFileSync("./test.txt", `This is Aditi Upadhyay`)
