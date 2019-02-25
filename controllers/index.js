var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index
}

function index(req, res, next) {
  res.render('index', { 
    title: 'Catch Hands',
    user: req.user,
  });
}