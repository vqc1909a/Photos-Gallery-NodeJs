const mongoose = require('mongoose');
const PhotoSchema = mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     imageURL: {
          type: String,
          required: true
     },
     public_id: {
          type: String,
          required: true
     },
     created_at: {
          type: Date,
          default: Date.now()
     }
})
module.exports = mongoose.model('Photos', PhotoSchema);
