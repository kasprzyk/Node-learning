const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Express #1");
});

app.get("/help", (req, res) => {
  res.send("Express #2");
});

app.get("/title", (req, res) => {
  res.send("title page");
});
app.get("/weather", (req, res) => {
  res.send("weather page");
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
