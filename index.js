const express = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api-routes');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const HOST_DB = process.env.DB || '185.13.37.116';

mongoose.connect('mongodb://' + HOST_DB + '/anime-projet', {useNewUrlParser: true });
const db = mongoose.connection;
/* 
*    Use nodemon [file.js] to run api
*/
express.use(cors());
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