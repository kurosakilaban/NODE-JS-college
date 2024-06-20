const mongoose = require('mongoose')
    mongoose.connect(process.env.MONGODB_URL,{dbName: process.env.DB_NAME})
    .then(()=>{
        console.log('mongodb connected')
    })
    .catch((err)=>console.log(err.message));