const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [8, 'Password must be at least 8 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (val) {
        // "this" only points to current document when creating a new document
        // "this" does not work on updating a document
        return val === this.password; // 100 < 200
      },
      message: 'Passwords must match',
    },
  },
  photo: String,
});

// Virtual Properties
/*
userSchema.virtual('confirmPassword').get(function () {
  return this.password;
});
*/

const User = mongoose.model('User', userSchema);

module.exports = User;
