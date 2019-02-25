var express = require('express');
var router = express.Router();
var charactersCtrl = require('../controllers/characters');

router.get('/', charactersCtrl.index);
router.get('/:id', charactersCtrl.show);

module.exports = router;
