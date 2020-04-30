const express = require('express');
const router = express.Router();

//contrllers:
const {
    requireSignin,
    adminMiddleware,
  } = require('../controllers/authController');
const {
  create,
  list,
  read,
  remove,
} = require('../controllers/tagController');

//validators
const { runValidation } = require('../validators/index');
const { tagCreateValidator } = require('../validators/tagValidator');


router.post(
  '/tag',
  tagCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

router.get('/tags', list);

router.get('/tag/:slug', read);

router.delete('/tag/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;
