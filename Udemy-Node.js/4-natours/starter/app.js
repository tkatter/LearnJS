// Importing modules
const express = require('express');

// Core Variables
const app = express();

// Route
app.get('/', (req, res) => {
  // res.status(200).send('Hello from the server side!');
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You can post to this endpoint...');
});

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
