const express = require('express');
const router = express.Router();
const { authMiddleware,requireSignin,adminMiddleware } = require('../controllers/authController');
const { read } = require('../controllers/userController');

router.get('/profile',requireSignin,authMiddleware,read);

module.exports = router;
