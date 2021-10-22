const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv-flow").config();
let PORT = process.env.PORT || 4000
const importData = require("./nba.json")


app.get("/", (req, res) => {
  res.send("HEROKU LETS GO!")
})

app.get("/nba", (req, res) => {
  res.send(importData)
})

app.listen(PORT, function() {
  console.log("Server is running on port " + PORT )
})


module.exports = app;  