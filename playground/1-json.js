const fs = require("fs");
// const book = {
//   title: "test",
//   author: "test"
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Piotr";
data.age = "32";
const dataToSave = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataToSave);
// console.log(data.title);
