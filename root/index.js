require('dotenv').config();
require('./helpers/init_mongoDB');
const express = require('express');
const routes = require('./Routes/api');
    const app = express();
    app.use(routes);
    app.listen(process.env.port || 4000, function () {
        console.log('NOW LISTENING FOR REQUEST ON : http://localhost:4000')
    });