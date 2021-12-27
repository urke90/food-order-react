const express = require('express');

const router = express.Router();

const mealsController = require('../controllers/meal');

router.get('/get-meals', mealsController.getMeals);

module.exports = router;
