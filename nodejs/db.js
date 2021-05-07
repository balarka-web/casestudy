const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://balarka:balarka@test.dmiis.mongodb.net/regform?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;