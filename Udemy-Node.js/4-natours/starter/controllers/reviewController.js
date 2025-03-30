const Review = require('./../models/reviewsModel');
const factory = require('./handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  // Defining tour and user of a review if they are not present in the POST req
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.createReview = factory.createOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.getReview = factory.getOne(Review);
