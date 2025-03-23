const mongoose = require('mongoose');
const slugify = require('slugify');

// Create mongoose SCHEMA
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxLength: [
        40,
        'A tour name must have less than or equal to 40 characters',
      ],
      minLength: [
        10,
        'A tour name must have more than or equal to 10 characters',
      ],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour should have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty must be set to either easy, medium or difficult',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.0,
      min: [1, 'Rating must be above 1.0, got {VALUE}'],
      max: [5, 'Rating must be below 5.0, got {VALUE}'],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // "this" only points to current document when creating a new document
          // "this" does not work on updating a document
          return val < this.price; // 100 < 200
        },
        message: 'The discount price ({VALUE}) should be less than the price',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a short summary'],
      select: false,
    },
    description: {
      type: String,
      trim: true,
      select: false,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
      select: false,
    },
    images: {
      type: [String],
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: {
      type: [Date],
      select: false,
    },
    secretTour: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  {
    // Allow virtual properties when model is ouput to JSON or Object
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual Properties
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.pre('save', function (next) {
  console.log('Will save document...');
  next();
});

// DOCUMENT MIDDLEWARE: runs after .save() and .create()
tourSchema.post('save', function (doc, next) {
  console.log('Document saved!');
  next();
});

// QUERY MIDDLEWARE
// tourSchema.pre('find', function (next) {
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
