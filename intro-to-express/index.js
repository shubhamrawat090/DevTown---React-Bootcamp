const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body parser

const app = express(); // call the express package, you can name anything instead of "app", but we do it for best practices
app.use(bodyParser.urlencoded({ extended: true })); //there are different types of parsers and we are using the one which parses form data

// cater to the get requrest to the root or homepage i.e. "/", of the website
app.get("/", function (req, res) {
  // // send html line(s)
  // res.send("<h1>Hey Congrats on Running Express Server</h1>");

  // send html file
  res.sendFile(__dirname + "/index.html"); // __dirname + "/index.html" gives absolute path of index.html file
});

// handling post request
app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var ans = n1 + n2;
  res.send("Answer: " + ans);
  // console.log(req.body);
});

// cater to <homePage URL>/about page request
app.get("/about", function (req, res) {
  res.send("<h1>Hello! This is Backend WebDev BootCamp</h1>");
});

// express listens to port 3000(available by default in the system) where the request will be coming from
app.listen(3000, function () {
  console.log("Server running on port: 3000");
  //callback fn: it is nameless
  //because it is not being used anywhere except for this app.listen() only,
  //therefore, it doesn't require a name to be reused later
});
