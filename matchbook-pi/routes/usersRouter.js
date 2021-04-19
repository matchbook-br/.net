var express = require('express');
const usersController = require('../Controller/usersController');
var router = express.Router();
const ValidarCadrasto = require('../middlewares/ValidarCadastro')

/* GET users listing. */
router.get('/', usersController.index);
router.post('/', ValidarCadrasto, usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;
