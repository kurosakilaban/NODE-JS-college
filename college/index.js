require('dotenv').config();
require('./helpers/init_mongoDB');
const express = require('express');
const StudentRoute = require('./routes/StudentRoute');
const app = express();
app.use(express.json());
app.use(StudentRoute);


//handling 404 error
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404
    next(err)
    })
     
    //Error handler
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.send({
            error:{
                status: err.status || 500,
                message: err.message
            }
        })
    })

app.listen(process.env.port || 4000, function () {
    console.log('NOW LISTENING FOR REQUEST ON : http://localhost:4000')
});