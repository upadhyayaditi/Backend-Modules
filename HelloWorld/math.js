// Define a function named 'add' that takes two parameters 'a' and 'b' and returns their sum
function add(a, b){
    return a + b;
}

// Define a function named 'sub' that takes two parameters 'a' and 'b' and returns their difference
function sub(a, b){
    return a - b;
}

// Export the 'add' and 'sub' functions as properties of an object using ES6 object shorthand
module.exports = {
    add, // Property named 'add' whose value is the 'add' function defined above
    sub  // Property named 'sub' whose value is the 'sub' function defined above
}
