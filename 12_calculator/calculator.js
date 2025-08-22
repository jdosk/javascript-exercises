const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  total = 0;
	for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  return total;
};

const multiply = function(arr) {
  total = arr[0];
	for (let i = 1; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	let total = 1;
  let counter = 1;
  while (counter <= x) {
    total = total * counter;
    counter = counter + 1;
  }
  return total;
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
