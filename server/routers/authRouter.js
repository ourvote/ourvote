const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// auth login
router.get('/login', (req, res) => {
  (req, res) => console.log('Hi from GET /login');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
});

// auth with google
router.get('/google', (req, res) => {
  // handle with passport
});

//auth with google
router.post('/google', 
  authController.fetchGoogle,
  authController.postData,
  authController.fetchDbData,
);

// auth with facebook
router.get('/facebook', (req, res) => {
  // handle with passport
});

module.exports = router;
