const express = require('express');
const router = express.Router();
const { getAllStars } = require('../controller/etoiles/getEtoiles');
const { getStar } = require('../controller/etoiles/getEtoile');

router.get('/stars', getAllStars);
router.get('/stars/:id', getStar);

module.exports = router;