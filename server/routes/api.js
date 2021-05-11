/*const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const traindetails = require('../models/traindetails');

const db = "mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/traindetails?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/traindetails', function(req, res){
    console.log('Get request for all details');
    traindetails.find({})
    .exec(function(err, traindetails){
        if (err){
            console.log("Error retrieving details");
        }else {
            res.json(traindetails);
        }
    });
});


module.exports = router;*/