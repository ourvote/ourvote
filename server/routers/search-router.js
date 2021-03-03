const express = require('express');
const searchController = require('../controllers/searchController.js');
const router = express.Router();

router.get('/',
  searchController.getAll,
  (req, res) => res.status(200).json(res.locals),
);

router.post('/',
  searchController.upsertByAddress,
  // searchController.getByNames,
  (req, res) => res.status(200).json(res.locals),
);

module.exports = router;