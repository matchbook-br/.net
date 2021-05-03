var express = require('express');
const usersController = require('../Controller/usersController');
var router = express.Router();
const ValidarCadasto = require('../middlewares/ValidarCadastro')

/* GET users listing. */
router.get('/', usersController.index);

router.get('/mybooks', usersController.mybooks);

router.get('/registro', usersController.registro);
router.get('/meuperfil', usersController.meuperfil);
router.post('/', ValidarCadasto, usersController.create);

router.get('/login' , usersController.login)
router.post('/login', usersController.auth);
router.post('/', usersController.create);

router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;
