var express = require('express');
var router = express.Router();
var mainsCtrl = require('../controllers/mains');

router.get('/', mainsCtrl.index);

// add a fighter to the user's mains
router.get('/add/:id', mainsCtrl.addMain);
// delete a fighter from the user's mains
router.delete('/:id', mainsCtrl.destroyMain)

module.exports = router;