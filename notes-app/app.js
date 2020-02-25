const getNotes = require("./notes.js");
const yargs = require("yargs");
const validator = require("validator");
const note = getNotes();
const chalk = require("chalk");
const command = process.argv[2];

yargs.version("1.0.1");

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding new note");
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: function() {
    console.log("Removing a note");
  }
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function() {
    console.log("Reading a note");
  }
});

yargs.command({
  command: "list",
  describe: "Listing all the notes",
  handler: function() {
    console.log("List the notes");
  }
});

console.log(yargs.argv);

// if (command === "add") {
//   console.log("Adding note");
// } else if (command === "remove") {
//   console.log("removing note");
// } else {
//   console.log("wrong command");
// }
