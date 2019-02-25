var Character = require('../models/character');

module.exports = {
  index
}

function index(req, res) {
  res.render('characters/index', {
    title: 'Catch Hands',
    user: req.user
  })
}