var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index,
  addMain,
  destroyMain,
  destroyAllMains
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

function addMain(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: `http://localhost:3000/api/fighters/${req.params.id}`,
    json: true
  }

  rp(options)
    .then(fighter => {
      console.log(fighter, "API RESPONSE SON!")
      var newMain = {
        "id": fighter.id,
        "name": fighter.name,
        "image_url": fighter.image_url,
        "combos": fighter.combos
      }
      return newMain
    })
    .catch(err => {
      console.log('error fetching fighter: ', err)
    })
    .then(newM => {
      return User.findOneAndUpdate(
        { googleId: req.user.googleId },
        { $push: { mains: newM } },
        { new: true } 
      )
    })
    .catch(err => {
      console.log('error updating user\'s mains', err)
    })
    .then(() => {
      res.redirect('/mains')
    })
}

function destroyMain(req, res) {
  User.findOne( { googleId: req.user.googleId } )
    .then(user => {
      var mains = user.mains
      var filteredMains = mains.filter(main => {
        return main.id !== parseInt(req.params.id)
      })
      return filteredMains
    })
    .then(filteredM => {
      return User.findOneAndUpdate(
        { googleId: req.user.googleId },
        { $set: { mains: filteredM } },
        { new: true } 
      )
    })
    .then(() => {
      res.redirect('/mains')
    })
}

function destroyAllMains(req, res) {
  User.findOneAndUpdate(
      { googleId: req.user.googleId },
      { $set: 
        { mains: [] },
      },
      { new: true }
    )
    .then(removedMains => {
      console.log(removedMains);
      res.redirect('/mains')
    })
}