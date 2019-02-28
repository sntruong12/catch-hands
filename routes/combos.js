var express = require('express');
var router = express.Router();
var combosCtrl = require('../controllers/combos');

router.post('/mains/:id/combos', combosCtrl.create)

module.exports = router