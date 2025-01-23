const palindromes = function (str) {
    const noPunc = str.replace(/[^a-zA-Z0-9]/g, '');
    const reverse = noPunc.split('').reverse().join('');



    return reverse === noPunc;
};

// Do not edit below this line
module.exports = palindromes;
