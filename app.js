// require express
const { name } = require("ejs");
const express = require("express");

// initiate the express app
const app = express();
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

// listen on a specfic route
app.get("/", (req, res) => {
  // send a text response
  res.render("index");
});

app.get("/about", (req, res) => {
  console.log(req.query);
  res.render("about", { qs: req.query });
});

app.get("/profile/:name", (req, res) => {
  const data = {
    age: 23,
    job: "Athlete",
    friends: ["hammad", "ali", "ahmad"],
  };
  res.render("profile", { person: req.params.name, data: data });
  //   res.send("profile id is " + req.params.name);
});

// listen for requests
app.listen(3000);
