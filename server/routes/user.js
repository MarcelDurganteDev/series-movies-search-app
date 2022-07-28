const express = require('express');
const Router = express.Router();
const { userById, readUser, updateUser } = require('../controllers/user');
const { requireLogin, isAuth, isAdmin } = require( '../controllers/auth' );

// with "isAuth" middleware one user cannot access other user profile, user needs to be currently authenticated user
// TO SUMMARISE: to access this rout user needs to be logged in, be the currently authenticated user, and admin (role == 1)
Router.get('/secret/:userId', requireLogin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  });
});

Router.get('/user/:userId', readUser);
Router.put('/user/:userId', requireLogin, isAuth, isAdmin, updateUser);

Router.param('userId', userById);

module.exports = Router;
