const mongoose = require('mongoose');
const Tour = require('./tourModel');
// 1) Text for the review
// 2) Rating
// 3) Created at timestamp
// 4) Reference to the tour of which the review pertains to
// 5) Reference to the user of which the review belongs to

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    review: {
      type: String,
      required: [true, 'Review can not be empty!'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user.'],
    },
  },
  {
    // Allow virtual properties when model is ouput to JSON or Object
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

// Populate
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  // this.populate({
  //   path: 'tour',
  //   select: 'name',
  // });
  next();
});

// Static method to calculate the ratingsAverage for a tour
reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRatings: { $avg: '$rating' },
      },
    },
  ]);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRatings,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4,
    });
  }
};

// Document Middleware
reviewSchema.post('save', async function () {
  await this.constructor.calcAverageRatings(this.tour);
});

// Query Middleware
reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.clone().findOne();
  next();
});

/*
schemaName.pre(/^findOneAnd/, async function (next) {
  this.r = await this.clone().findOne();
   console.log(this.r);
  next();
});
*/

reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.tour);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
