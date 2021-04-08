const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser:true,useUnifiedTopology: true}).then(()=>console.log('Connected to db'))
.catch(()=>console.log(error.message));

const seedUsers = [
    {
        name:'Ismail',
        email:'ismail@gmail.com',
        amount:2000,
    },
    {
        name:'David Warner',
        email:'warner007@gmail.com',
        amount:3400,
    },
    {
        name:'Apeksha Jadhav',
        email:'apeksha@gmail.com',
        amount:4050,
    },
    {
        name:'Aditya',
        email:'aditya@gmail.com',
        amount:6350,
    },
    {
        name:'Samuel',
        email:'samuel@gmail.com',
        amount:1000,
    },
    {
        name:'Siddhi Joshi',
        email:'siddhi@gmail.com',
        amount:5600,
    },
    {
        name:'Pasha',
        email:'pasha@gmail.com',
        amount:3563,
    },
    {
        name:'Mahesh',
        email:'mahesh@gmail.com',
        amount:8000,
    },
    {
        name:'Akshay More',
        email:'akshay@gmail.com',
        amount:1300,
    },
]

User.insertMany(seedUsers)
    .then(res =>console.log(res))
    .catch(err =>console.log(err))