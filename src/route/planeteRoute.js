const express = require('express');
const router = express.Router();
const { getPlanete } = require('../controller/planetes/getPlanete');

// Route pour obtenir une planète spécifique par ID
router.get('/:id', getPlanete);

module.exports = router;
