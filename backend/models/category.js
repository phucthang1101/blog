const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    categoryPhoto: {
      data: Buffer,
      contentType: String,
    },
    categoryDesc: {
      type: String,
      max: 1000,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('Category', categorySchema);
