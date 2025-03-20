// Importing modules
const express = require('express');

// Core Variables
const app = express();

// Route/API
/*
app.get('/', (req, res) => {
  // res.status(200).send('Hello from the server side!');
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You can post to this endpoint...');
});
*/

app.get('/api/v1/tours');

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
