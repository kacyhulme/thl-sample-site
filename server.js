var express = require("express");

// Create our app

var app = express();

app.use(express.static("public"));

app.get("/service", function(req, res) {
  res.send("Service");
});
app.get("/portfolio", function(req, res) {
  res.send("Portfolio");
});
app.get("/team", function(req, res) {
  res.send("Team");
});
app.get("/blog", function(req, res) {
  res.send("Blog");
});
app.get("/contact", function(req, res) {
  res.send("Service");
});

app.listen(3000, function() {
  console.log("Express server is up on port 3000");
});
