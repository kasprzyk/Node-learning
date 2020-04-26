require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5e9db6f8a70a98b6f4d31337")
  .then((task) => {
    console.log(task);
    return task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
