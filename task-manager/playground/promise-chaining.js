require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5e9da9032d31d986c001db54", { age: 10 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 10 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
