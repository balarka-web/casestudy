const express = require('express');
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
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving details");
        }else {
            res.json(traindetails);
        }
    });
});

/*router.get('/traindetails/:id', function(req, res){
    console.log('Get request for a single video');
    traindetails.findById(req.params.id)
    .exec(function(err, video){
        if (err){
            console.log("Error retrieving video");
        }else {
            res.json(traindetails);
        }
    });
});*/ 




/*router.post('/traindetails', function(req, res){
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if (err){
            console.log('Error saving video');
        }else{
            res.json(insertedVideo);
        }
    });
});*/




/*router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }

    );
});*/




/*router.delete('/video/:id', function(req, res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
            res.json(deletedVideo);
        }
    });
});*/

module.exports = router;