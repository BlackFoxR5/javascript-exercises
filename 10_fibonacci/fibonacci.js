const fibonacci = function(num) {
    //the sequence is 1, 1, 2, 3, 5, 8, 13, 21.....
    let num1 = 1;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else if (num === 0 || num === "0") {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2; //sum = 2, 3, 5, 8
            num1 = num2; // num1 = 1, 2, 3, 5
            num2 = sum; // num2 = 2, 3, 5, 8
        } 
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
