const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Server Running Successfully!"
    });
});

app.get('/test', (req, res) => {
    res.json({
        status: 200,
        message: 'Test Successful'
    });
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Greeting</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <h1>Hello, ${name}!</h1>
                <p>Nice to meet you! 😊</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
