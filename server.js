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

/*const express = require('express');
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
})*/










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




















/*const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));


const url=`mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority`;


const register={
username:String,
email:String,
password:String
}


const Register = mongoose.model("regform",register);


app.get("/",function(req,res){
  res.sendFile(__dirname + "/registration.component.html");
 app.listen(3000,function(){
  console.log("server running on 3000");
})




/*app.get("/register", function(req, res){

  var firstName = req.body.firstname;
  var password = req.body.pass;

  var dbObject = {
    firstName : firstName,
    password : password
  };*/

  
  
  
  /*app.get("/register", function(req, res){

    var firstName = req.body.firstname;
    var password = req.body.pass;

    var dbObject = {
      firstName : firstName,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");*/



    /*Register.create(dbObject, function(err, user){
        if(err){  
          console.log("SOme erorr when saving  regising user");
          res.send("unable to save user");
        }else{
          console.log("user saved");
          res.send("user data saved succesfullt, checm in atlas");
        }
    });*/



//});

/*app.post("/register", function(req, res){

  var firstName = req.body.firstname;
    var password = req.body.pass;

    var dbObject = {
      firstName : firstName,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");



    app.get("/register", function(req, res){

    var firstName = req.body.firstname;
    var password = req.body.pass;

    var dbObject = {
      firstName : firstName,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");*/



    /*Register.create(dbObject, function(err, user){
        if(err){  
          console.log("SOme erorr when saving  regising user");
          res.send("unable to save user");
        }else{
          console.log("user saved");
          res.send("user data saved succesfullt, checm in atlas");
        }
    });*/



//});

/*app.post("/register", function(req, res){

  var firstName = req.body.firstname;
    var password = req.body.pass;

    var dbObject = {
      firstName : firstName,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");

    mongoose.connect(url,connectionParams).then(()=>{
      console.log("connected to db");
    })

});*/















//modified

/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

const url=`mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority`;



const register={
 email:String,
 username:String,
password:String
}


const Register = mongoose.model("regform",register);

app.get("/",function(req,res){
  app.listen(3000,function(){
  res.sendFile(__dirname + "/registration.component.html");
  console.log("server running on 3000");
})
})








app.post("/register", function(req, res){

  var email=req.body.email;
  var username = req.body.username;
    var password = req.body.password;

    var dbObject = {
      email:email,
      username : username,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");



});














app.post("/add",function(req , res){

  let newNote=new Note({
email:req.body.email,
username:req.body.username,
password:req.body.password
});
newNote.save()
})


const connectionParams={
  useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}




mongoose.connect(url,connectionParams).then(()=>{
  console.log("connected to db");
})*/
































//exref



/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority',{ useNewUrlParser: true}, { useUnifiedTopology : true });



//const url=`mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority`;




const register={
email:String,
username:String,
password: String
}
const Register = mongoose.model("regform",register);

app.get("/",function(req,res){
 // res.sendFile(__dirname + "/registration.component.html");
res.sendFile(__dirname + "/src/app/registration/registration.component.html");

})
app.listen(3000,function(){
  console.log("server running on 3000");
})

app.get("/register", function(req, res){
    
    var email = req.body.email;
    var username=req.body.username;
    var password = req.body.password;

    var dbObject = {
      email : email,
      username:username,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");



    /*Register.create(dbObject, function(err, user){
        if(err){  
          console.log("SOme erorr when saving  regising user");
          res.send("unable to save user");
        }else{
          console.log("user saved");
          res.send("user data saved succesfullt, checm in atlas");
        }
    }); */


   
//});

/*app.post("/register", function(req, res){
   
  var email = req.body.email;
  var username=req.body.username;  
  var password = req.body.password;

    var dbObject = {
      email : email,
      username : userame,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");


   
});

app.post("/add",function(req , res){

  let newNote=new Note({
email:req.body.email,
userame:req.body.username,
password:req.body.password
});
newNote.save()
})



const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}


/*mongoose.connect(url,connectionParams).then(()=>{
  console.log("connected to db");
})*/




/*app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname + '/app/registration.component.html'));
})*/





























//before modification oriignal running

/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
//mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority',{ useNewUrlParser: true}, { useUnifiedTopology : true });

const url=`mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority`;

const register={
  firstName:String,
password:String
}
const Register = mongoose.model("regform",register);

app.get("/register",function(req,res){
  res.sendFile(__dirname + "./src/app/registration/registration.component.html");
})
app.listen(3000,function(){
  console.log("server running on 3000");
})*/







/*app.get("/register", function(req, res){
    
    var firstName = req.body.firstName;
    var password = req.body.password;

    var dbObject = {
      firstName : firstName,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");*/



    /*Register.create(dbObject, function(err, user){
        if(err){  
          console.log("SOme erorr when saving  regising user");
          res.send("unable to save user");
        }else{
          console.log("user saved");
          res.send("user data saved succesfullt, checm in atlas");
        }
    });*/


   
//});








//before code means modification

app.post("/register", function(req, res){
   
  var firstName = req.body.firstName;
    var password = req.body.password;

    var dbObject = {
      firstName : firstName,
      password : password
    };

    var newUser = new Register(dbObject);
    newUser.save();

    res.send("user saved succsuflly");


   
});

app.post("/add",function(req , res){

  let newNote=new Note({
firstName:req.body.firstName,
lastName:req.body.lastName,
email:req.body.email,
password:req.body.password
});
newNote.save()
})



const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}


mongoose.connect(url,connectionParams).then(()=>{
  console.log("connected to db");
})




app.get('/register',(req,res) =>{
  res.sendFile(path.join(__dirname + '/app/registration.component.html'));
})









/*const express=require('express');
const bodyParser=required=require('body-parser');
const path=require('path');

const api=require('./server/routes/api');


const port=3000;

const app=express();

app.use(express.static(path.join(__dirname,'/')))


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/api',api);

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'/'));

});

app.listen(port,function(){
  console.log("server running on" + port);
})*/















