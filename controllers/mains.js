var rp = require('request-promise');

var User = require('../models/user');

module.exports = {
  index
}

function index(req, res) {
  User.find( { googleId: req.user.googleId } )
    .then(user => {
      console.log(user.mains);
      res.render('mains/index', {
        title: 'Catch Hands',
        user: req.user,
        mains: user.mains
      })
    })

}