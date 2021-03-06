const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;
const fahrenheitToCelcius = () => {
  return (temp - 32) / 1.8;
};

const celciusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

module.exports = {
  calculateTip,
  celciusToFahrenheit,
  fahrenheitToCelcius,
};
