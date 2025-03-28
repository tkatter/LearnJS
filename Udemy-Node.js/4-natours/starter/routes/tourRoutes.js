const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

// NESTED ROUTES
// POST /tour/:tourId/reviews - create review for a tour
// GET /tour/:tourId/reviews - get reviews for a tour
// GET /tour/:tourId/reviews/:reviewId - get specific review for a tour

// Very simple implementation - requires import of reviewController to work
// router
//   .route('/:tourId/reviews')
//   .post(
//     authController.protect,
//     authController.restrictTo('user'),
//     reviewController.createReview
//   )
//   .get();

router.use('/:tourId/reviews', reviewRouter);

// router.param('id', tourController.checkID);
router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router
  .route('/top-5-cheapest')
  .get(tourController.aliasTopCheapTours, tourController.getAllTours);

router
  .route('/top-5-tours')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);
// .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

module.exports = router;
