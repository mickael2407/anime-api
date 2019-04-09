const express = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const HOST_DB = process.env.DB || 'localhost';
const apiRoutes = require('./api-routes');


/* 
    use nodemon [file.js] to run api
*/
express.use(bodyParser.urlencoded({
    extended: true
}));

express.use(bodyParser.json());

express.get('/', (req, res) => {
    res.send('Welcome');
});

mongoose.connect('mongodb://' + HOST_DB + '/animeapi');
var db = mongoose.connection;

express.use('/api',apiRoutes);

express.listen(PORT, () => {
    console.log("Running RestHub on port " + PORT);
})