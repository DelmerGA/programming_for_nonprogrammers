var express = require("express"),
  app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/happy.html");
});

app.listen(3000, function () {
  console.log("SERVER RUNNING");
})
