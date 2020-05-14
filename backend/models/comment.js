const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    commentText: {
      type: String,
      trim: true,
      required: true,
      max: 200,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      lowercase: true,
    },
    blogId:{type:ObjectId,ref:'Blog',require:true},
    reply:[{type:ObjectId,ref:'replyComment',require:false}]
  },
  { timestamps: true }
);


module.exports = mongoose.model('Comment', commentSchema);
