var express = require("express");
var path = require("path");
var open = require("open");
var port = 3000;
var app = express();

/* static routes */
app.use("/jquery", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use("/popper", express.static(path.join(__dirname, "../node_modules/popper.js/dist/umd/")));
app.use("/bootstrap", express.static(path.join(__dirname, "../node_modules/bootstrap/dist")));
app.use("/images", express.static(path.join(__dirname, "../images")));

/* routing HTTP requests */
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

/* port listener */
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
