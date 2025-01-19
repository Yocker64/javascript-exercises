const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
	if (arr.length === 0) {
    return 0
  }else{
    return arr.reduce((total, acc)=>{
      total = total + acc;
      return total;  
    })
  }
};

const multiply = function(arr) {
  return arr.reduce((total, act)=> {
    total = total* act;
    return total;
  })
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }else{
    return number * factorial(number-1);
  }
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
