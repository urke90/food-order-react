const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session);

const MONGODB_URI =
    'mongodb+srv://urke90:cikaKure1990@cluster0.yqbde.mongodb.net/food-order-app';

const app = express();
const store = new MongoDbStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

// const mongoConnect = require('./util/database').mongoConnect;

const port = process.env.PORT || 3001;

// cors ==> removes cors errors when making request to Node/Express app
// allows parsing JSON
// express-session is pkg allowing us to use sessions
app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: 'my secret string',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

const mealRoutes = require('./routes/meal');
const authRoutes = require('./routes/auth');

app.use(authRoutes);
app.use('/meals', mealRoutes);

mongoose
    .connect(MONGODB_URI)
    .then((res) => {
        app.listen(port);
    })
    .catch((err) => console.log('error connecting to mongo with mogoose'));
