
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
     destination: './public/images',
     filename: (req, file ,cb) => {
          cb(null, uuidv4() + path.extname(file.originalname.toLowerCase()));
     }
});

const upload = multer({
     storage,
     dest: './public/images',
     fileFilter: (req, file, cb)=>{
          const fileTypes = /jpeg|jpg|png|gif/;
          const mimetype = fileTypes.test(file.mimetype);
          const extname = fileTypes.test(path.extname(file.originalname))
          if(mimetype && extname){
               return cb(null, true);
          }
          req.fileValidationError = "Ingrese una imagen por favor";
          return cb(null, false)
     }
}).single('image');

module.exports = upload;
