const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

require('dotenv').config()

cloudinary.config({
  cloud_name: 'dkk44tzuf',               
  api_key: process.env.Cloudinary_ApiKey,                     
  api_secret: process.env.Cloudinary_ApiSecret                 
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,                          
  params: {
    folder: 'Saylani_userPhoto',                          
    allowed_formats: ['jpg', 'png', 'jpeg']        
  }
})

module.exports = { cloudinary, storage } 