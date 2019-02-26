var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index,
  addFighter
}

function index(req, res) {
  User.findOne( { googleId: req.user.googleId } )
    .then(user => {
      console.log(user.mains);
      res.render('mains/index', {
        title: 'Catch Hands',
        user: req.user,
        mains: user.mains
      })
    })
}

function addFighter(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: `http://localhost:3000/api/fighters/${req.params.id}`,
    json: true
  }

  rp(options)
    .then(character => {
      return character.name
    })
    .catch(err => {
      console.log('error fetching fighter: ', err)
    })
    .then(name => {
      User.findOne( {googleId: req.user.googleId} )
        .then(user => {
          console.log(user.mains)

          // check if fighter is already in mains array
          if(user.mains.includes(name)) {
            console.log('same fighter cannot be added twice')
            res.redirect('/mains')
          } else {
            console.log('fighter has been added to user\'s mains')
            user.mains.push(name);
            user.save();
            res.redirect('/mains')
          }

        })
    })
    .catch(err => {
      console.log('error finding user: ', err)
    })
}