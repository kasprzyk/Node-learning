const mongoose = require("mongoose");
const validator = require("validator");
// const connectionURL = "mongodb://127.0.0.1:27017";

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length < 6) {
        throw new Error("Password must be longer than 6");
      }
      if (validator.contains(value)) {
        throw new Error("Password cannot contain word password");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
});

const me = new User({
  name: "Piotr",
  age: 32,
  email: "asdasd@gmail.com   ",
  password: "password",
});

me.save()
  .then((me) => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const newTask = new Task({
  description: "Test",
  completed: true,
});

newTask
  .save()
  .then((newTask) => {
    console.log(newTask);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
