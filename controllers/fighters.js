var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index,
  show
}

function index(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: 'https://catch-hands.herokuapp.com/api/fighters',
    json: true
  }

  rp(options)
    .then(fighters => {
      res.render('fighters/index', { 
        title: 'Catch Hands',
        user: req.user,
        fighters
      });
    })
    .catch(err => {
      console.log(err, 'error getting fighters');
      res.render('fighters/index', {
        title: 'Catch Hands',
        user: req.user
      })
    })
}

function show(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: `https://catch-hands.herokuapp.com/api/fighters/${req.params.id}`,
    json: true
  }

  rp(options)
    .then(fighter => {
      res.render('fighters/show', {
        title: 'Catch Hands',
        user: req.user,
        id: req.params.id,
        fighter
      })
    })
}