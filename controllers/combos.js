var User = require('../models/user');

module.exports = {
  create,
}

function create(req, res) {
  req.user.mains.map((main) => {
    if (main.id === parseInt(req.params.id)) {
      main.combos.push(req.body.combo);
    }
  });
  req.user.save();
  res.redirect('/mains/' + req.params.id);
}