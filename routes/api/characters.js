var express = require('express');
var router = express.Router();
var charactersCtrl = require('../../controllers/api/characters');

router.get('/characters', charactersCtrl.getAllCharacters);
router.get('/characters/:id', charactersCtrl.getOneCharacter);
router.post('/characters', charactersCtrl.createCharacter);
router.put('/characters/:id', charactersCtrl.updateCharacter)
// router.delete('/characters/:id', charactersCtrl.deleteCharacter)

module.exports = router;