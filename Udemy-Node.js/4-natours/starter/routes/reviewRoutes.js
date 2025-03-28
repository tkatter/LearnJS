const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  // Route for getting all reviews
  .get(authController.protect, reviewController.getAllReviews)
  // Route for creating a review - restricted to only logged in users with role: user
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
