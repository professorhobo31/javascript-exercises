const convertToCelsius = function(inputFahrenheit) {
  let converted = (inputFahrenheit - 32)/(9/5)
  converted = Number(converted.toFixed(1))
  return converted
};

const convertToFahrenheit = function(inputCelsius) {
  let converted = (inputCelsius * (9/5)) + 32
  converted = Number(converted.toFixed(1))
  return converted
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
