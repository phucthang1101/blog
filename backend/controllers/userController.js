const User = require('../models/user');

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

exports.publicProfile = (req, res) => {
  let username = req.params.username;
  User.findOne({ username }).exec((err, userFromDB) => {
    if (err || !userFromDB) {
      return res.status(400).json({
        error: 'User not found !!!',
      });
    }
    userFromDB.photo = undefined;
    userFromDB.hashed_password = undefined;
    res.json({ user: userFromDB });
  });
};
