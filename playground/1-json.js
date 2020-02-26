const fs = require("fs");
const book = {
  title: "test",
  author: "test"
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJSON);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData);
