const express = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api-routes');
const PORT = process.env.PORT || 8080;
const HOST_DB = process.env.DB || 'localhost';

mongoose.connect('mongodb://' + HOST_DB + '/animeapi');
const db = mongoose.connection;
db.

/* 
*    Use nodemon [file.js] to run api
*/
express.use(bodyParser.urlencoded({
    extended: true
}));

express.use(bodyParser.json());

express.get('/', (req, res) => {
    res.send('Welcome');
});
express.use('/api',apiRoutes);

express.listen(PORT, () => {
    console.log("Running RestHub on port " + PORT);
});