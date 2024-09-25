const convertToCelsius = function(fahrenheitTemperature) {
  let celsiusTemperature = Math.round(((fahrenheitTemperature - 32) * (5 / 9)) * 10) / 10;
  return celsiusTemperature;  
};

const convertToFahrenheit = function(celsiusTemperature) {
  let fahrenheitTemperature = Math.round(((9 / 5) * celsiusTemperature + 32) * 10) / 10;
  return fahrenheitTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
