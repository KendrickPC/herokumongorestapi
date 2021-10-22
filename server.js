const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv-flow").config();
let PORT = process.env.PORT || 4000
const importData = require("./nba.json")


app.get("/", (req, res) => {
  res.send("HEROKU LETS GO ROUND 2!")
})

app.get("/api/welcome", (req, res) => {
  res.status(200).send({message: "Welcome to Heroku Troubles 101"})
})

app.get("/nba", (req, res) => {
  res.send(importData)
})

mongoose.connect
(
  process.env.DBHOST,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }  
).catch(error => console.log("Error connecting to MongoDB: " + error));

mongoose.connection.once('open', () => console.log(`Connected successfully to MongoDB`))

app.listen(PORT, function() {
  console.log("Server is running on port " + PORT )
})


module.exports = app;  