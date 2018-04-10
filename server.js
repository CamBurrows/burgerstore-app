var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
// Set the port of our application
// process.env.PORT lets the port be set by Heroku


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });