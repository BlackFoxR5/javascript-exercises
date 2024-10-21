const sumAll = function(x, y) {
    let arr = [];
    let sum = 0;
    const min = Math.min(x, y);
    const max = Math.max(x, y);

    if (x < 0 || y < 0) {
        return "ERROR"
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR"
    }
    if (typeof x !== 'number' || typeof y !== 'number') {
        return "ERROR"
    }

    for (n = min; n <= max; n++) {
        arr.push(n);
        sum = sum + n;
    }
    return sum;
    console.log(sum);
};
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
