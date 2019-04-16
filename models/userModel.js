const mongo = require('mongoose');

const userSchema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nbConnections: Number,
    lastConnection: Date
});

var User = module.exports = mongo.model('user', userSchema);

module.exports.signin = (callback, username) => {
    User.findOne({'username': username}, callback);
};