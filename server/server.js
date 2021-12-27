const express = require('express');
const cors = require('cors');

const app = express();

const mongoConnect = require('./util/database').mongoConnect;
const mealRoutes = require('./routes/meal');

const port = process.env.PORT || 3001;

// cors ==> removes cors errors when making request to Node/Express app
app.use(cors());
// allows parsing JSON
app.use(express.json());

app.use('/meals', mealRoutes);

mongoConnect(() => {
    app.listen(port);
});
