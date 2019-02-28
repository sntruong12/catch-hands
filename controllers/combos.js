var User = require('../models/user');

module.exports = {
  create,
}

function create(req, res) {
  req.user.mains.map((item) => {

    if (item.id === parseInt(req.params.id)) {

      item.combos.push(req.body.combo);

    }
  });
  req.user.save();
  res.redirect('/mains/' + req.params.id);
}