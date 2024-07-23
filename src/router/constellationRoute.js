const express = require('express');
const router = express.Router();
const { getConstellationByStar } = require('../controller/constellations/getConstellationsParEtoile');

router.get('/stars/:id/constellation', getConstellationByStar);

module.exports = router;