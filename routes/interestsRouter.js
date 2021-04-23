var express = require('express');
const interestsController = require('../Controller/interestsController');
var router = express.Router();

/* GET users listing. */
router.get('/', interestsController.index);
router.put('/:id', interestsController.update);

module.exports = router;