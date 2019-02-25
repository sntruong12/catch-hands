var express = require('express');
var router = express.Router();
var fightersCtrl = require('../controllers/fighters');

router.get('/', fightersCtrl.index);
router.get('/:id', fightersCtrl.show);

module.exports = router;
