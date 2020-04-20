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
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const newTask = new Task({
  description: "Test",
  completed: true,
});
// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//   const me = new User({
//     name: "Piotr",
//     age: 32,
//   });

newTask
  .save()
  .then((newTask) => {
    console.log(newTask);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
