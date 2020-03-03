const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return "Notes";
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log("notes removed");
    saveNotes(notesToKeep);
  } else {
    console.log("note not found");
  }
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
