/* CURL REQUESTS:
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
// CORE MODULES
const express = require('express');
const morgan = require('morgan');

// USER MODULES
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Core Variables
const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// app.use((req, res, next) => {
//   console.log('Hello from the middleware!');
//   next();
// });

// ROUTES
/* original route code
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getTour);
app.post('/api/v1/tours', createTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);
*/
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
