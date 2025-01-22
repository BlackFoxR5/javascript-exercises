const repeatString = function() {
    let result = '';
    const num = Math.floor(Math.random() * 1000)
    for (let i = 0; i < num; i++) {
        result += 'odin';
    }
    return result;
};

console.log(repeatString());
console.log(repeatString().length/3);



// Do not edit below this line
module.exports = repeatString;
