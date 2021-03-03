const express = require('express');
const searchController = require('../controllers/searchController.js');
const router = express.Router();

router.get('/',
  searchController.getAll,
  (req, res) => res.status(200).json(res.locals),
);

router.post('/',
  searchController.getByAddress,
  (req, res) => res.status(200).json(res.locals),
);

module.exports = router;