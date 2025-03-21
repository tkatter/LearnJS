const mongoose = require('mongoose');

// Create mongoose SCHEMA
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  difficulty: String,
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
