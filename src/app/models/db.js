const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./train.model');