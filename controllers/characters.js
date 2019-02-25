var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index,
  show
}

function index(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: 'http://localhost:3000/api/characters',
    json: true
  }

  rp(options)
    .then(characters => {
      res.render('characters/index', { 
        title: 'Catch Hands',
        user: req.user,
        characters
      });
    })
    .catch(err => {
      console.log(err, 'error getting characters');
      res.render('characters/index', {
        title: 'Catch Hands',
        user: req.user
      })
    })
}

function show(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: `http://localhost:3000/api/characters/${req.params.id}`,
    json: true
  }

  rp(options)
    .then(character => {
      res.render('characters/show', {
        title: 'Catch Hands',
        user: req.user,
        character
      })
    })
}