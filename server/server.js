const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const MONGO_DB_URL =
    'mongodb+srv://urke90:cikaKure1990@cluster0.yqbde.mongodb.net/food-order-app?retryWrites=true&w=majority';

const app = express();

// const mongoConnect = require('./util/database').mongoConnect;
const mealRoutes = require('./routes/meal');

const port = process.env.PORT || 3001;

// cors ==> removes cors errors when making request to Node/Express app
app.use(cors());
// allows parsing JSON
app.use(express.json());

app.use('/meals', mealRoutes);

mongoose
    .connect(MONGO_DB_URL)
    .then((res) => {
        app.listen(port);
    })
    .catch((err) => console.log('error connecting to mongo with mogoose'));
