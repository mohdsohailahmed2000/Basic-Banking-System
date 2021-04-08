const mongoose = require('mongoose');
const db = require('../connection')

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = {
    fetchData: function(callback){
        var userData = userTable.find({});
        userData.exec(function(err, data){
            if (err) throw err;
            return callback(data);
        })
    }
}