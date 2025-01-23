const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
  array.forEach((x) => {
    total += x;
  });
  return total;
};

const multiply = function(array) {
    let total = 1;
  array.forEach((x) => {
    total *= x;
  });
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	let n = 1;
  for (let i = 1; i <= number; i++) {
     n = n * i;
  }
  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
