/*var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
 
var app = express();
 
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
 
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
 
mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority');
 
var Schema = new mongoose.Schema({
_id    : String,
name: String,
age   : Number
});
 
var user = mongoose.model('emp', Schema);
 
app.post('/new', function(req, res){
new user({
_id    : req.body.email,
name: req.body.name,
age   : req.body.age
}).save(function(err, doc){
if(err) res.json(err);
else    res.send('Successfully inserted!');
});
});
 
 
 
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/













/*var express = require("express");
var app = express();
var port = 3000;
 
app.get("/", (req, res) => {
 res.send("Hello World");
});


//app.use("/b.html", (req, res) => {
  app.get("/", (req, res) => {  
res.sendFile(__dirname + '/b.html');
 });*/













       
























/*var express=require("express");
var bodyParser=require("body-parser");
  
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority',{useUnifiedTopology: true},{ useNewUrlParser: true });
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
  
var app=express()
  
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
  
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
db.collection('register').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('signup_success.html');
})
  
  
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('b.html');
}).listen(3000)
  
  
console.log("server listening at port 3000");*/














//100% working code

/*require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));*/







































require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));