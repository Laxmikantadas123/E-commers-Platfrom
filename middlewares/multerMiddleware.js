const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb('Error: Images only!');
  }
  cb(null, true);
};

const upload = multer({
  storage: multer.diskStorage({
    destination: './images',
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
  }),
  limits: { fileSize: 5000000 },
  fileFilter
});

module.exports = upload;