const express = require('express');
const app = express();

// Define a port
const port = process.env.PORT || 3000;

// Set up a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
