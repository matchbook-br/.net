
var express = require('express');
const booksController = require('../Controller/booksController');
const auth = require('../middlewares/auth');
var router = express.Router();
const bookValidate = require('../middlewares/bookValidate')
/* GET users listing. */
router.get('/', booksController.index);
router.get('/relacao/:id', booksController.show);
router.get('/registerbook', auth, booksController.registerbook);

router.post('/', bookValidate, booksController.create);
router.put('/:id', booksController.update);
router.delete('/:id',booksController.delete);


module.exports = router;

