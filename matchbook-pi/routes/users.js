var express = require('express');
const usersController = require('../Controller/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', usersController.index);
router.post('/', usersController.create);

module.exports = router;
