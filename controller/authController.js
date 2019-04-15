User = require("../models/userModel");
var AuthReponse = require("../entity/AuthReponse");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signin = (req, res) => {
  User.signin((err, user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, checkHash) => {
        if (checkHash) {
          var authRponse = new AuthReponse(
            user.username,
            user.nbConnections,
            user.lastConnection
          );
          // userLoged = user
          user.nbConnections ++;
          user.lastConnection = new Date();
          user.save(user);
          res.json(authRponse);
        } else {
          res.json({
            message: "Bad login"
          });
        }
      });
    } else {
      res.json({
        message: "Bad login"
      });
    }

    /*     if (!user ) {
      res.json({
        message: 'Bad login'
      });
    } else if (err) {
      throw err;
    } else {       
      var authRponse = new AuthReponse(user.username, user.nbConnections, user.lastConnection);
      res.json(authRponse);
    } */
  }, req.body.username);
};
exports.signup = (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      let user = new User();
      user._id = null;
      user.username = req.body.username;
      user.password = hash;
      user.email = req.body.email;
      user.nbConnections = 0;
      user.lastConnection = new Date();
      user.save(user);
      res.json({
        message: "User create"
      });
    });
  });
};
