// Importing modules
const express = require('express');

// Core Variables
const app = express();

// Route
app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side!');
});

// Server
const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
