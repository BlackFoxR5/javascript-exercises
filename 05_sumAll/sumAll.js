const sumAll = function(x, y) {
    let arr = []; //declared outside loop so value of n is created in a single loop
    let sum = 0;
    const min = Math.min(x, y); // Get the smaller value between x and y
    const max = Math.max(x, y); // Get the larger value between x and y

    if (x < 0 || y < 0) {
        return "ERROR" //check if any of the inputs are negative numbers, return error if -ve
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR" //check if the inputs are non integers, return error if not integers
    }
    if (typeof x !== 'number' || typeof y !== 'number') {
        return "ERROR" //check if the inputs are non-numbers, return error if not numbers
    }

    for (n = min; n <= max; n++) {
        arr.push(n);
        sum = sum + n; //add each value of 'n' since it is inside the loop
    }
    return sum;
    
};
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
