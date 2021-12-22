const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    return res.json({ message: 'some dummy json' });
});

app.listen(PORT);
