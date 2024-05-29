// require express
const express = require("express");

// initiate the express app
const app = express();

// listen on a specfic route
app.get("/", (req, res) => {
  // send a text response
  res.send("this is the homepage");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// listen for requests
app.listen(3000);
