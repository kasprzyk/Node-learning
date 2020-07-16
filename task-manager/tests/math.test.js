const {
  calculateTip,
  fahrenheitToCelcius,
  celciusToFahrenheit,
} = require('../src/math');

test('Should calculate total with tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
  //   if (total !== 13) {
  //     throw new Error('Total tip should be 13. Got ' + total);
  //   }
});

test('should calculate total with default tip', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test('should calculate celcius to fahrenheit', () => {
  const temp = celciusToFahrenheit(0);
  expect(temp).toBe(32);
});

// test('should calculate fahrenheit to celcius', () => {
//   const temp = fahrenheitToCelcius(32);
//   expect(temp).toBe(0);
// });

test('async test demo', (done) => {
  setTimeout(() => {
    expect(1).toBe(2);
    done();
  }, 2000);
});
