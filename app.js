const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Works hello world.");
});

module.exports = app;