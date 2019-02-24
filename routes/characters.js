var express = require('express');
var router = express.Router();
var charactersCtrl = require('../controllers/characters');

router.get('/', charactersCtrl.index);

module.exports = router;
