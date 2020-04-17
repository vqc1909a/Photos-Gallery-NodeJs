const express = require('express');
const router = express.Router();
const upload = require('../upload');
const fs = require('fs-extra');
const Photo = require('../models/Photo');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
     api_key: process.env.CLOUDINARY_API_KEY,
     api_secret: process.env.CLOUDINARY_API_SECRET
})
router.get('/', async(req, res)=>{
     const photos = await Photo.find();
     res.render('images', {photos});
})
router.get('/images/create', async(req, res)=>{
     const photos = await Photo.find();
     res.render('imageForm', {photos});
})
router.post('/images', async(req, res)=>{
   upload(req, res, async()=>{
     if(req.fileValidationError){
          const photos = await Photo.find();
          res.render('imageForm', {photos, error: req.fileValidationError});
     }
     const upload = await cloudinary.uploader.upload(req.file.path, {
          folder: "gallery-photos-nodejs"
     });
     const photo  = new Photo({
          title: req.body.title,
          description: req.body.description,
          imageURL: upload.secure_url,
          public_id: upload.public_id
     })
     await photo.save();
     fs.remove(req.file.path);
     res.redirect('/images/create');
   })
})
router.get('/images/:imageId/delete', async(req,res)=>{
     const removedPhoto = await Photo.findByIdAndDelete(req.params.imageId);
     await cloudinary.uploader.destroy(removedPhoto.public_id);
     res.redirect('/images/create');
})

module.exports = router;
