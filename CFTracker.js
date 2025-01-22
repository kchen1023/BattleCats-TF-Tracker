const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const portNumber = process.env.PORT || 4000;
console.log(`To access server: http://localhost:${portNumber}`);
app.listen(portNumber);


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// display homepage
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
