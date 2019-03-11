var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index,
  show,
  addMain,
  destroyMain,
  destroyAllMains
}

function index(req, res) {
  console.log(req.user)
  User.findOne( { googleId: req.user.googleId } )
    .then(user => {
      res.render('mains/index', {
        title: 'Catch Hands',
        user: req.user,
        mains: user.mains
      })
    })
}

function show(req, res) {
  var mains = req.user.mains
  // find the main matching the req.params.id
  var filterMains = mains.filter(m => {
    return m.id === parseInt(req.params.id)
  })
  // get the first and only element in the filterMains array
  var main = filterMains[0]
  res.render('mains/show', {
    title: 'Catch Hands',
    user: req.user,
    main: main,
    combos: main.combos
  })
}

function addMain(req, res) {
  var options = {
    // figure out how to get dynamic url
    uri: `https://catch-hands.herokuapp.com/api/fighters/${req.params.id}`,
    json: true
  }

  rp(options)
    .then(fighter => {
      var newMain = {
        "id": fighter.id,
        "name": fighter.name,
        "image_url": fighter.image_url,
        "stock_icon_url": fighter.stock_icon_url,
        "color": fighter.color,
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