const convertToCelsius = function(fahrenheitTemperature) {
  let celsiusTemperature = Number(((fahrenheitTemperature - 32) * (5 / 9)).toFixed(1));
  return celsiusTemperature;  
};

const convertToFahrenheit = function(celsiusTemperature) {
  let fahrenheitTemperature = Number(((9 / 5) * celsiusTemperature + 32).toFixed(1));
  return fahrenheitTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
