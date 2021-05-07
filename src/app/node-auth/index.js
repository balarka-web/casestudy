const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/user"); //new addition
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();


const app = express();

// PORT
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});


/*const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");

const user = require("./routes/user"); //new addition

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});*/