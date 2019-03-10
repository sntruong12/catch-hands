var express = require('express');
var router = express.Router();
var fightersCtrl = require('../../controllers/api/fighters');

router.get('/fighters', fightersCtrl.getAllFighters);
router.get('/fighters/:id', fightersCtrl.getOneFighter);
// router.post('/fighters', fightersCtrl.createFighter);
// router.put('/fighters/:id', fightersCtrl.updateFighter);
// router.delete('/fighters/:id', fightersCtrl.deleteFighter);

// api reference route
router.get('/reference', fightersCtrl.index)

module.exports = router;