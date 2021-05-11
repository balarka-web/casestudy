const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const traindetailSchema=new Schema({

    Number:Number,
    Trainname:String,
    From:String,
    To:String,
    Timing:Number,
    Days:Number
});

module.exports=mongoose.model('traindetails',traindetailSchema,'traindetails');
