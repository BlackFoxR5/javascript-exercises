const reverseString = function(str) {
    let splitString = str.split("");    // Step 1: Split the string into an array of characters
    let reverseArray = splitString.reverse();    // Step 2: Reverse the array
    let joinArray = reverseArray.join("");    // Step 3: Join the array back into a string
    return joinArray;    // Return the reversed string
};

// Test the function with ''
console.log(reverseString("")); //empty string


// Do not edit below this line
module.exports = reverseString;
