const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser:true,useUnifiedTopology: true});

mongoose.connection.once('open', function(){
    console.log('connection made');
}).on('error', function(error){
    console.log('error:',error);
});