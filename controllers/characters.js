var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index
}

function index(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: 'http://localhost:3000/api/characters',
    json: true
  }

  rp(options)
    .then(characters => {
      res.render('index', { 
        title: 'Catch Hands',
        user: req.user,
        characters
      });
    })
    .catch(err => {
      console.log(err, 'error getting characters');
      res.render('index', {
        title: 'Catch Hands',
        user: req.user
      })
    })
}