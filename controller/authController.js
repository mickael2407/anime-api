User = require("../models/userModel");
authReponse = require("../entity/AuthReponse");

exports.signin = (req, res) => {
  User.signin((err, user) => {
    console.log(user[0]);
    if (err) {
      res.json({
        message: 'Bad login'
      });
    } else {
/*       var authRponse = new AuthReponse(user[0].username, user[0].nbConnections, user[0].lastConnection);
      console.log(authRponse);  */
      res.json(user);
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