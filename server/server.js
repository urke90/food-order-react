const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    return res.json({ test: 'some dummy text' });
});

app.listen(3001, () => {
    console.log('server started on port 3001');
});
