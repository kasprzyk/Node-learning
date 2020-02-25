const getNotes = require("./notes.js");
const validator = require("validator");
const note = getNotes();
const chalk = require("chalk");

const command = process.argv[2];
if (command === "add") {
  console.log("Adding note");
} else if (command === "remove") {
  console.log("removing note");
} else {
  console.log("wrong command");
}
