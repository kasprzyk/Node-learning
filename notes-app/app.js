const getNotes = require("./notes.js");
const validator = require("validator");
const note = getNotes();
const chalk = require("chalk");
console.log(chalk.underline.blue(note));

// console.log(validator.isEmail("test@wp.pl"));
// console.log(validator.isURL("testetestst"));
// const add = require("./utils.js");

// const sum = add(4, 10);
// console.log(sum);
