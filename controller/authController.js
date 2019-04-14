User = require("../models/userModel");
authReponse = require("../entity/AuthReponse");

exports.signin = (req, res) => {
  console.log(req);
/*  const authRes = User.find({
    username: req.body.username,
    password: req.body.password
  }); */
  res.json({
    'username': req.body.username,
    'password': req.body.password
  });
  // authReponse = new AuthReponse()
};
