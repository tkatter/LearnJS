const Review = require('./../models/reviewsModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  // Automatically attatch user id to the review
  const newReviewRequest = req.body;
  const { _id: id } = req.user;
  newReviewRequest.user = id;

  const newReview = await Review.create(newReviewRequest);

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});
