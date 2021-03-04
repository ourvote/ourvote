const express = require('express');

const router = express.Router();

// auth login
router.get('/login',
  (req, res) => console.log('Hi from GET /login')
);

module.exports = router;