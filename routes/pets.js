var express = require('express');
var router = express.Router();

const petsCtrl = require('../controllers/pets');
router.get('/new', petsCtrl.new);
router.get('/', petsCtrl.index);
router.get('/:id', petsCtrl.show);
router.get('/edit/:id', petsCtrl.edit);

router.post('/', petsCtrl.create);
router.put('/:id', petsCtrl.update);
router.delete('/:id', petsCtrl.delete);



module.exports = router;
