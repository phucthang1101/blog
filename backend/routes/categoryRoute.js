const express = require('express');
const router = express.Router();
const {
  create,
  list,
  read,
  remove,
  photo,
  update,
} = require('../controllers/categoryController');

//validators
const { runValidation } = require('../validators/index');
const { categoryCreateValidator } = require('../validators/categoryValidator');
const {
  requireSignin,
  adminMiddleware,
} = require('../controllers/authController');

router.post('/category', requireSignin, adminMiddleware, create);

router.get('/categories', list);

router.get('/category/:slug', read);

router.delete('/category/:slug', requireSignin, adminMiddleware, remove);

router.get('/category/photo/:slug', photo);

router.put('/category/:slug', requireSignin, adminMiddleware, update);

module.exports = router;
