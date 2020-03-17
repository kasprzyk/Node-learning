const request = require("request");

const url =
  "https://api.darksky.net/forecast/c24c203d764b06415ad1b07d351a75e2/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  let currently = response.body.currently;
  console.log(
    `It is currently ${currently.temperature} degree out and ${currently.precipProbability}% chance of rain`
  );
});
