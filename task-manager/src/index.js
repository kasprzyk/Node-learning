const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "testest", {
    expiresIn: "7 days",
  });
  console.log(token);
  const data = jwt.verify(token, "testest");
  console.log(data);
};

myFunction();
