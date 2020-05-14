const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const replyCommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      lowercase: true,
    },
    replyText: {
      type: String,
      trim: true,
      required: true,
      max: 200,
    },
    commentId: { type: ObjectId, ref: 'Comment', require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('replyComment', replyCommentSchema);
