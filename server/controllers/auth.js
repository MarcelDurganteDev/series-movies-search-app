const User = require('../models/user');
const jwt = require('jsonwebtoken'); //  to generate signed token
const expressJwt = require('express-jwt'); //  for authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');

// SIGN UP METHOD

exports.signup = (req, res) => {
  // console.log('req.body', req.body);
  // create a new user based on what we get in the request body
  // with the body-parser pkg we get anything in the body response
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user
    });
  });
};

// SIGN IN METHOD

exports.login = (req, res) => {
  // find the user based on email
  // console.log( 'REQUEST SIGN IN', req );
  console.log('RESPONSE SIGN IN ', res);

  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User with that email does not exist. Please signup'
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password dont match'
      });
    }
    // generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // persist the token as 't' in cookie with expiry date
    res.cookie('t', token, { expire: new Date() + 9999 });
    // return response with user and token to frontend client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

// SIGN OUT METHOD

exports.signout = (req, res) => {
  res.clearCookie('t');
  res.json({ message: 'Sign Out success' });
};

// REQUIRE SIGN IN METHOD

exports.requireLogin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'], // added later
  userProperty: 'auth'
});

// CURRENTLY AUTHENTICATED USER METHOD

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(402).json({
      error: 'Access denied'
    });
  }
  next();
};

// IS ADMIN METHOD

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: 'Admin resource! Access denied'
    });
  }
  next();
};
