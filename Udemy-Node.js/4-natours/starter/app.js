// curl post request:
/*
curl -H 'Content-Type: application/json' \
-d '{ "key":"value","key":"value"}' \
-X POST \
http://127.0.0.1:3000/api/v1/tours

PATCH
curl -H 'Content-Type: application/json' \
-d '{ "key":"value","key":"value"}' \
-X PATCH \
http://127.0.0.1:3000/api/v1/tours
*/

// Importing modules
// Core modules
const express = require('express');
const fs = require('fs');

// Core Variables
const app = express();

// Middleware
app.use(express.json());

// TOP LEVEL CODE
// read tours-simple data file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// Route/API
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  // console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  // Check if tour is undefined (tour doesn't exist)
  if (!tour) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  // console.log(req.body);

  // Make a new ID
  const newId = tours[tours.length - 1].id + 1;

  // Replace the request ID with the new ID
  const newTour = Object.assign({ id: newId }, req.body);

  // Push the new tour to the original tours array
  tours.push(newTour);
  // Write this new tour addition to the original data file
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        tour: newTour,
      });
    }
  );
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length - 1) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length - 1) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
