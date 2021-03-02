const express = require('express');

const router = express.Router();

// auth login
router.get('/login', (req, res) => {

});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
});

// auth with google
router.get('/google', (req, res) => {
  // handle with passport
});

// auth with facebook
router.get('/facebook', (req, res) => {
  // handle with passport
});

module.exports = router;
