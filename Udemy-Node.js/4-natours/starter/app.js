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

// CORE MODULES
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');

// USER MODULES
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const sanitizeRequest = require('./utils/xssMiddleware');

// Core Variables
const app = express();

// GLOBAL MIDDLEWARES
// Security HTTP headers
app.use(helmet());

// Rate limiter middleware
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour.',
});

app.use('/api', limiter);

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware to parse body data from req.body
app.use(express.json({ limit: '10kb' }));

// Middleware to Sanitize data against NoSQL query injection
app.use(mongoSanitize());

// Middleware to Sanitize data against XSS attacks
app.use(sanitizeRequest);

// Middleware to prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

// Middleware to serve static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req);
  next();
});

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

// MIDDLEWARE AFTER REQUEST WAS NOT REACHED BY OUR ROUTERS
/* OG simple error middleware for uncaught url
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl}`,
  });
  next();
});
*/

/* v2 of error middleware
app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl}`);
  err.status = 'fail';
  err.statusCode = 404;
  next(err);
});
*/

// final error middleware using class in ./utils/appError.js
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
