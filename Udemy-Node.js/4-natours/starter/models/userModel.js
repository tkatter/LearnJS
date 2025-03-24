const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

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
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [8, 'Password must be at least 8 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (val) {
        // "this" only points to current document when CREATE or SAVE a new document
        // "this" does not work on updating a document
        return val === this.password; // 100 < 200
      },
      message: 'Passwords must match',
    },
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  passwordChangedAt: {
    type: Date,
    // select: false,
  },
  photo: String,
});

// Virtual Properties
/*
userSchema.virtual('confirmPassword').get(function () {
  return this.password;
});
*/

// METHODS
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const convertedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < convertedTimestamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  // Create reset token
  const resetToken = crypto.randomBytes(32).toString('hex');

  // Encrypt reset token with crypto and save in DB document
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set expiration for the reset token
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // Return plain text reset token to send to the user
  console.log({ resetToken }, this.passwordResetToken);
  return resetToken;
};

// MIDDLEWARE
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash this password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
