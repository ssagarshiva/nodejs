const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Existing route
app.get('/', (req, res) => {
    res.send('Hello, AKS!');
});

// New route to expose "Hello World"
app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
