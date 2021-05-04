var multer = require ('multer');
var crypto = require ('crypto');
var { extname, resolve } = require ('path');

module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (request, file, cb) => {
            crypto.randomBytes(16, (err, response) => {
                if (err) return cb(err);
                return cb(null, response.toString('hex') + extname(file.originalname));
            })
        },
    }),
}
