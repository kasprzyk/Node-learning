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

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5e9da9032d31d986c001db54", { age: 14 })
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
