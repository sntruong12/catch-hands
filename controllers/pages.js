module.exports = {
  showCredits,
}

function showCredits(req, res) {
  res.render('pages/credits', {
    title: 'Catch Hands',
    user: req.user
  })
}