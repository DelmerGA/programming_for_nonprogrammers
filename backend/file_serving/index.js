var express = require("express"),
  app = express();

app.get("/", function (req, res) {
  res.sendFile("happy.html");
});

app.listen(3000, function () {
  console.log("SERVER RUNNING");
})
