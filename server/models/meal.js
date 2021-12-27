const getDb = require('../util/database').getDb;

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

class Meal {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    static fetchAll() {
        const db = getDb();

        return db
            .collection('meals')
            .find()
            .toArray()
            .then((meals) => {
                // console.log('FETCHED MEALS', meals);
                return meals;
            });
    }

    save() {
        const db = getDb();
        db.collection('meals');
        console.log('db', db);
    }
}

module.exports = Meal;
