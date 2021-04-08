const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    fromName:{
        name: String,
        required: true
    },
    toName:{
        name: String,
        required: true
    },
    transfer:{
        type:Number,
        required: true
    }
});    

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports= Transaction;