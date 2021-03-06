var Fighter = require('../../models/api/fighter');

module.exports = {
  getAllFighters,
  getOneFighter,
  // createFighter,
  // updateFighter,
  // deleteFighter,
  
  // api reference page
  index
};

function getAllFighters(req, res) {
  Fighter.find({})
    .then(fighters => {
      var apiResponse = fighters.map(fighter => {
        var details = {
          "id": fighter.id,
          "name": fighter.name,
          "debut": fighter.debut,
          "series": fighter.series,
          "image_url": fighter.image_url,
          "stock_icon_url": fighter.stock_icon_url,
          "color": fighter.color
          // "combos": fighter.combos
        }
        return details
      })
      return apiResponse
    })
    .then(fighters => {
      res.status(200)
      .json(fighters)
    })
}

function getOneFighter(req, res) {
  Fighter.findOne( {id: req.params.id} )
    .then(fighter => {
      var details = {
        "id": fighter.id,
        "name": fighter.name,
        "debut": fighter.debut,
        "series": fighter.series,
        "image_url": fighter.image_url,
        "stock_icon_url": fighter.stock_icon_url,
        "color": fighter.color
        // "combos": fighter.combos
      }
      return details
    })
    .then(fighter => {
      res.status(200)
        .json(fighter)
    })
}

function createFighter(req, res) {
  Fighter.create(req.body)
    .then(fighter => {
      res.status(201)
        .json(fighter)
    })
}

function updateFighter(req, res) {
  Fighter.findOneAndUpdate({id: req.params.id}, req.body, { new: true })
    .then(fighter => {
      res.status(200)
        .json(fighter)
    })
}

function deleteFighter(req, res) {
  Fighter.findOneAndDelete( {id: req.params.id} )
    .then(fighter => {
      res.status(200)
        .json(fighter)
    })
}

function index(req, res) {
  res.render('api/index', {
    title: 'Catch Hands - API',
    user: req.user
  })
}