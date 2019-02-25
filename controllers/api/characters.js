var Character = require('../../models/api/character');

module.exports = {
  getAllCharacters,
  getOneCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter
};

function getAllCharacters(req, res) {
  Character.find({})
    .then(characters => {
      var apiResponse = characters.map(character => {
        var details = {
          "id": character.id,
          "name": character.name,
          "debut": character.debut,
          "series": character.series,
          "image_url": character.image_url,
          "combos": character.combos
        }
        return details
      })
      return apiResponse
    })
    .then(characters => {
      res.status(200)
      .json(characters)
    })
}

function getOneCharacter(req, res) {
  Character.findOne( {id: req.params.id} )
    .then(character => {
      var details ={
        "id": character.id,
        "name": character.name,
        "debut": character.debut,
        "series": character.series,
        "image_url": character.image_url
      }
      return details
    })
    .then(character => {
      res.status(200)
        .json(character)
    })
}

function createCharacter(req, res) {
  Character.create(req.body)
    .then(character => {
      res.status(201)
        .json(character)
    })
}

function updateCharacter(req, res) {
  Character.findOneAndUpdate({id: req.params.id}, req.body, { new: true })
    .then(character => {
      res.status(200)
        .json(character)
    })
}

function deleteCharacter(req, res) {
  Character.findOneAndDelete( {id: req.params.id} )
    .then(character => {
      res.status(200)
        .json(character)
    })
}