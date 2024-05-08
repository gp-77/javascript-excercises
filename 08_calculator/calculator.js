const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if(number === 0) return 1;
  let factorial = 0;
	if(number > 0) {
    for(let i=0; i<=number; i++) {
      if(i===0) {
        factorial = 1;
        continue;
      }
      factorial = factorial * i;
    }
  }
  return factorial;
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
