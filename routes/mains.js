var express = require('express');
var router = express.Router();
var mainsCtrl = require('../controllers/mains');

router.get('/', mainsCtrl.index);

module.exports = router;