var express = require('express');
var router = express.Router();
var charactersCtrl = require('../../controllers/api/characters');

router.get('/characters', charactersCtrl.getAllCharacters);
router.get('/characters/:id', charactersCtrl.getOneCharacter);
router.post('/characters', charactersCtrl.createCharacter);
// router.delete('/puppies/:id', charactersCtrl.deleteCharacter)
// router.put('/puppies/:id', charactersCtrl.updateCharacter)

module.exports = router;