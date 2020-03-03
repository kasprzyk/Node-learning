const notes = require("./notes.js");
const yargs = require("yargs");
const validator = require("validator");
const chalk = require("chalk");
const command = process.argv[2];

yargs.version("1.0.1");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
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
yargs.parse();
