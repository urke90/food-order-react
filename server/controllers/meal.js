const Meal = require('../models/meal');

exports.getMeals = (req, res, next) => {
    Meal.fetchAll().then((meals) => {
        console.log('meals', meals);
        return res.send(res);
    });
    // .catch((err) => console.log('err creating meals'));
    // console.log('bla', bla);
    // res.json({ msg: 'meals again broooooooooooooo' });
};
