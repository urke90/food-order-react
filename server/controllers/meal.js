const Meal = require('../models/meal');

exports.getMeals = (req, res, next) => {
    Meal.find({})
        .then((result) =>
            res.json({
                meals: result
            })
        )
        .catch((err) => console.log('err finding all meals'));
};
