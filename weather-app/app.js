const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
// const yargs = require("yargs");
// const url =
//   "https://api.darksky.net/forecast/c24c203d764b06415ad1b07d351a75e2/37.8267,-122.4233?units=si";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(`error: ${error.body.code}`);
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     let currently =
//       response && response.body && response.body.currently
//         ? response.body.currently
//         : null;
//     if (currently) {
//       console.log(
//         `It is currently ${currently.temperature} degree out and ${currently.precipProbability}% chance of rain`
//       );
//     }
//   }
// });
// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGlvdGthcyIsImEiOiJjazd4aHJ1ZnEwMmgwM2dtbnJ2aGw0MWpzIn0.K1Ha3OHoH2rugffhUFpLig";

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log(`unable to connect to services`);
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location");
//   } else {
//     let lat = response.body.features[0].center[1];
//     let lng = response.body.features[0].center[0];
//     console.log(`lat: ${lat}, lng: ${lng}`);
//   }
// });

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
