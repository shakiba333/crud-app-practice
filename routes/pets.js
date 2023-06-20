var express = require('express');
var router = express.Router();

const petsCtrl = require('../controllers/pets');
router.get('/new', petsCtrl.new);
router.post('/', petsCtrl.create);
router.get('/', petsCtrl.index);
module.exports = router;
