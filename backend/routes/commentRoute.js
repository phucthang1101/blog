const express = require('express');
const router = express.Router();

//contrllers:
const {
    createComment,
    getCommentByBlogId,
    createReplyComment
  } = require('../controllers/commentController');

//validators
const { runValidation } = require('../validators/index');
const { tagCreateValidator } = require('../validators/tagValidator');

//add comment:
router.post('/comment',createComment)
router.get('/comment/:blogId',getCommentByBlogId)
router.post('/comment/reply',createReplyComment)

module.exports = router;
