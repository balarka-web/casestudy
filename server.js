/*const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




//...
//const app = express();           */

/* app.use()*/;

/*const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

//...
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}



// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);  */

// set port, listen for requests













/*original code*/

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
//mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority',{ useNewUrlParser: true}, { useUnifiedTopology : true });

const url=`mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority`;
const notesSchema={
  firstName:String,
lastName:String,
email:String,
password:String
}


app.get("/",function(req,res){
  res.sendFile(__dirname + "/registration.component.html");
})
app.listen(3000,function(){
  console.log("server running on 3000");
})


app.post("/add",function(req , res){

  let newNote=new Note({
firstName:req.body.firstName,
lastName:req.body.lastName,
email:req.body.email,
password:req.body.password
});
newNote.save()
})

const Note=mongoose.model("regform",notesSchema);

const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}


mongoose.connect(url,connectionParams)




app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname + '/app/registration.component.html'));
})










//working code

/*const mongoose = require('mongoose')

const url = `mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })*/


//https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i
























/*const formSchema = new mongoose.Schema(
  {
    data: Object,
  },
  { collection: `register` }
);

const Form = mongoose.model("Form", formSchema);

const formData = (bodyData) => {
  Form({ data: bodyData }).save((err) => {
    if (err) {
      throw err;
    }
  });
};

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", urlencodedParser, (req, res) => {
  formData(req.body);
  res.render("success", { name: req.body.name });
});

server.listen(3030);*/


/*const http=require('http');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
});
server.listen(3000,'localhost',()=>{
  console.log('listening');
})*/

















/*var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    //var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "name": name,
        "email" : email,
        //"phno": phno,
        "password" : password
    }

    db.collection('register').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('b.html');
}).listen(3000);


console.log("Listening on PORT 3000");*/










/*var express = require("express");
var app = express();
var port = 3000;
 
app.get("/", (req, res) => {
res.send("Hello World");
});
 
app.use("/", (req, res) => {
  res.sendFile("/b.html");
});


app.listen(port, () => {
  console.log("Server listening on port " + port);
});*/
















/*const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});*/












/*require("./models/db.js");
const express=require('express');
var app=express();
app.listen(3000,() =>{
  console.log("port started");
});*/
