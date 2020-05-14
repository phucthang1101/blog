const Comment = require('../models/comment');
const Blog = require('../models/blog');
const ReplyComment = require('../models/replyComment');
const { errorHandler } = require('../helpers/dbErrorHandler');
var mongoose = require('mongoose');
const formidable = require('formidable');

exports.createComment = (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (err, fields) => {
    const { username, commentText, email, blogId } = fields;

    if (!username || !username.length) {
      return res.status(400).json({
        error: 'Username is required',
      });
    }

    if (!commentText || !commentText.length) {
      return res.status(400).json({
        error: 'Content is required',
      });
    }

    let comment = new Comment();

    comment.username = username;
    comment.commentText = commentText;
    comment.email = email;
    comment.blogId = mongoose.Types.ObjectId(blogId);
    comment.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      Blog.findByIdAndUpdate(
        mongoose.Types.ObjectId(blogId),
        { $push: { comments: comment } },
        { new: true }
      ).exec((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          res.json(result);
        }
      });
    });
  });
};

exports.createReplyComment = (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (err, fields) => {
    console.log(fields )
    const username = fields.replyCommentUsername;
    const replyText = fields.replyCommentText;
    const email = fields.replyCommentEmail;
    const blogId = fields.blogId;
    const commentId = fields.commentId;

   
    if (!username || !username.length) {
      return res.status(400).json({
        error: 'Username is required',
      });
    }

    if (!replyText || !replyText.length) {
      return res.status(400).json({
        error: 'Content is required',
      });
    }

    let replyComment = new ReplyComment();

    replyComment.username = username;
    replyComment.replyText = replyText;
    replyComment.email = email;

    replyComment.commentId = mongoose.Types.ObjectId(commentId);
    console.log('created replyComment')
    replyComment.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      console.log(data)
      Blog.findOne({ _id: mongoose.Types.ObjectId(blogId) }).exec(
        (error, data) => {
          if (error) {
            return res.json({
              error: errorHandler(error),
            });
          }
          Comment.findByIdAndUpdate(
            mongoose.Types.ObjectId(commentId),
            { $push: { reply: replyComment } },
            { new: true }
          ).exec((err, result) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler(err),
              });
            } else {
              res.json(result);
            }
          });
        }
      );

     
    });
  });
};
// exports.getComment = (req, res) => {
//   Comment.find({}).exec((err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: errorHandler(err),
//       });
//     }
//     res.json(data);
//   });
// };

exports.getCommentByBlogId = (req, res) => {

  Comment.find({ blogId: req.params.blogId })
    .populate('reply', '_id username email replyText createdAt')
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};
// exports.remove = (req, res) => {
//   const _id = req.params._id;

//   Category.findOneAndRemove({ _id }).exec((err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: errorHandler(err),
//       });
//     }
//     //later will response blog that in same category
//     res.json({
//       message: 'Comment deleted !',
//     });
//   });
// };
