const express = require('express');
const Router = express.Router();
const {
  signup,
  login,
  signout,
} = require('../controllers/auth');
const { userSignupValidator } = require('../validator');

Router.post('/signup', userSignupValidator, signup);
Router.post('/login', login);
Router.get('/signout', signout);

module.exports = Router;
