const mongo = require('mongoose');

const userSchema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    username: String,
    password: String,
    email: String,
    nbConnections: Number,
    lastConnection: Date
});

var User = module.exports = mongo.model('user', userSchema);