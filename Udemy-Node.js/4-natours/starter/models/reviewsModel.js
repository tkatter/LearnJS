const mongoose = require('mongoose');
// 1) Text for the review
// 2) Rating
// 3) Created at timestamp
// 4) Reference to the tour of which the review pertains to
// 5) Reference to the user of which the review belongs to

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    enum: [0, 1, 2, 3, 4, 5],
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    // use 'pre' middleware to set this key equal to the Date.now()?
  },
});

reviewSchema.pre('save', function (next) {
  this.createdAt = Date.now();
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
