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

exports.createMeal = (req, res, next) => {
    // const name = req.body.name;
    // const description = req.body.description;
    // const price = req.body.price;
    // const creator = {
    //     name: name
    // };
    // const meal = new Meal({
    //     name: name,
    //     description: description,
    //     price: price,
    //     creator: creator
    // });
    // meal.save()
    //     .then((result) => {
    //         console.log('result creating new meal', result);
    //         return result;
    //     })
    //     .catch((err) => console.log('err creating new meal', err));
};
