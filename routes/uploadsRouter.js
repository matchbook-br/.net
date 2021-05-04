var express = require('express');
var multer = require('multer');

var multerConfig = require('./multer');
const upload = multer(multerConfig);

var router = express.Router();

router.post('/files', upload.single('file'), (req, res) => {
    return res.json({ ok: true });
});

module.exports = router;
