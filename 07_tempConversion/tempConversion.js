const convertToCelsius = function(tempFah) {
  console.log(typeof ((tempFah-32)*5/9).toFixed(1));
  
  return parseFloat(((tempFah-32)*5/9).toFixed(1));
};

const convertToFahrenheit = function(tempCel) {
  return parseFloat((tempCel*9/5 +32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
