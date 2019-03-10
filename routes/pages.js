var express = require('express');
var router = express.Router();
var pagesCtrl = require('../controllers/pages');

router.get('/credits', pagesCtrl.showCredits);

module.exports = router;