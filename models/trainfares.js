const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const trainfareSchema=new Schema({

    Number:Number,
    Trainname:String,
    Generalclassprice:Number,
    Ac2tierprice:Number,
    Ac3tierprice:Number
});

module.exports=mongoose.model('trainfares',trainfareSchema,'trainfares');
