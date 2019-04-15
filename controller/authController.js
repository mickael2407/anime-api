User = require("../models/userModel");
var AuthReponse = require("../entity/AuthReponse");

exports.signin = (req, res) => {
  User.signin((err, user) => {
    if (err) {
      res.json({
        message: 'Bad login'
      });
    } else {       
      var authRponse = new AuthReponse(user[0].username, user[0].nbConnections, user[0].lastConnection);
      res.json(authRponse);
    }
  }, req.body.username, req.body.password)
};
exports.signup = (req, res) => {
  let user = new User();
  user._id = null;
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;
  user.nbConnections = 0;
  user.lastConnection = new Date();
  user.save(user);
}