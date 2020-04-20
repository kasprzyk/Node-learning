const mongoose = require("mongoose");

// const connectionURL = "mongodb://127.0.0.1:27017";

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
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
