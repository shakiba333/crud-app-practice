var express = require('express');
var router = express.Router();

const petsCtrl = require('../controllers/pets');
router.get('/new', petsCtrl.new);
router.post('/', petsCtrl.create);
router.get('/', petsCtrl.index);
router.get('/:id', petsCtrl.show);
router.get('/', petsCtrl.edit);
module.exports = router;
