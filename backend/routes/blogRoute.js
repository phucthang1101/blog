const express = require('express')
const router = express.Router()
const {
    create,
    list,
    read,
    remove,
  } = require('../controllers/blogController');


  //validator:
  const { requireSignin,adminMiddleware } = require('../controllers/authController');

router.get('/blog',requireSignin,adminMiddleware,create)

module.exports = router