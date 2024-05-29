// require express
const { name } = require("ejs");
const express = require("express");

// initiate the express app
const app = express();
app.set("view engine", "ejs");

// listen on a specfic route
app.get("/", (req, res) => {
  // send a text response
  res.send("this is the homepage");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/profile/:name", (req, res) => {
  const data = {
    age: 23,
    job: "Athlete",
  };
  res.render("profile", { person: req.params.name, data: data });
  //   res.send("profile id is " + req.params.name);
});

// listen for requests
app.listen(3000);
