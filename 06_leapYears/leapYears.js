const leapYears = function(year) {
    // if (typeof year !== 'number' || !Number.isInteger(year)) {
    //     return "Invalid input: year must be an integer.";
    // }

    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
};

leapYears(1600);
leapYears(700);

// Do not edit below this line
module.exports = leapYears;
