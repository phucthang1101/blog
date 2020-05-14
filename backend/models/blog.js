const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 200,
    },
    slug: {
      type: String,
      index: true,
      required: true,
    },
    body: {
      // empty object mean u can all type of data
      type: {},

      required: true,
      min: 20,
      max: 2000000,
    },
    //description
    excerpt: {
      type: String,
      max: 1000,
    },
    mtitle: {
      type: String,
    },
    mdesc: {
      type: String,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },
    categories: [{ type: ObjectId, ref: 'Category', require: true }],
    tags: [{ type: ObjectId, ref: 'Tag', require: true }],
    comments:[{type:ObjectId,ref:'Comment',require:false}],
    postedBy: {
      type: ObjectId,
      ref: 'User',
    },
    showing: {
      type: Boolean,
      default:false,
      require: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
