const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  // Route for getting all reviews and getting reviews for specific tour from tourRoutes
  .get(authController.protect, reviewController.getAllReviews)
  // Route for creating a review - restricted to only logged in users with role: user
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    reviewController.getReview
  )
  .patch(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.updateReview
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'user'),
    reviewController.deleteReview
  );

module.exports = router;
