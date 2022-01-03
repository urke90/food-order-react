const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DUMMY_MEALS = [
    {
        // id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        // id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5
    },
    {
        // id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },
    {
        // id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99
    }
];

const mealSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        creator: {
            type: Object,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Meal', mealSchema);
