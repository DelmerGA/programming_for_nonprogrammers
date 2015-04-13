// load express
var express = require("express");
var app = express();


app.set("view engine", "ejs");


// setup static assets
app.use(express.static(__dirname + "/public"));

// SOMEONE REQUESTS GET /
app.get("/", function (req, res) {
  res.render("home.ejs")
});

// A more interesting route
app.get("/greet/:name", function (req, res) {
  var taco = req.params.name;
  res.render("greet.ejs", {name: taco})
});


app.get("/add/:x/:y", function (req, res) {
   var x = req.params.x;
   var y = req.params.y;
   res.send("result: " + (Number(x) + Number(y)));
});

app.get("/multiply/:x/:y", function (req, res) {
  var x = req.params.x;
   var y = req.params.y;
   res.send("result: " + (Number(x) * Number(y)));
});





// tell the server to listen
app.listen(3000)