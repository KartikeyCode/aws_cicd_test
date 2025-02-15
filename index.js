const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Server Running Successfully"
    });
});

app.get('/test', (req, res) => {
    res.send('Test Successful');
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name} Nice to meet you! `);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
