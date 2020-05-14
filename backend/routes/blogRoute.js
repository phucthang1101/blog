const express = require('express');
const router = express.Router();
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update,
  photo,
  listRelated,
  listBlogsForAdmin,
  listSearch,
  createComment
} = require('../controllers/blogController');

//validator:
const {
  requireSignin,
  adminMiddleware,
} = require('../controllers/authController');

//user access blog and list blog:
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.get('/blog/photo/:slug', photo);

//admin CRUD blog:
router.post('/admin/blog', requireSignin, adminMiddleware, create);
router.get('/admin/blogs', requireSignin, adminMiddleware, listBlogsForAdmin);
router.delete('/admin/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/admin/blog/:slug', requireSignin, adminMiddleware, update);

//related blog:
router.post('/blogs/related', listRelated);

//search blog:
router.get('/blogs/search', listSearch);


module.exports = router;
