const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let trainDetails = new Schema({

  from: {
    type: String
  },
  to: {
    type: String
  },
  trainNo: {
    type: String,
    unique: true
  },
  fare: {
    type: Number
  },
  tickets:{
    type:Number
  },
  date: {
    type: Date
  }
}, {
  collection: 'register'
})

module.exports = mongoose.model('trainDetails', trainDetails)

