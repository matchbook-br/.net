
var express = require('express');
const booksController = require('../Controller/booksController');
var router = express.Router();
const bookValidate = require('../middlewares/bookValidate')
/* GET users listing. */
router.get('/', booksController.index);
router.get('/:id', booksController.show)
router.post('/', bookValidate, booksController.create);
router.put('/:id', booksController.update);
router.delete('/:id',booksController.delete);


module.exports = router;

