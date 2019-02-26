var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);

// Google OAuth routes
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/mains',
    failureRedirect : '/'
  }
));
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;