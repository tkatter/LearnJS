const catchAsync = require('../utils/catchAsync');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users: users,
    },
  });
});

// For user use.
exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Send error if user tries POSTing password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword',
        400
      )
    );
  }

  // 2) If not, update user document
  const filteredBody = filterObj(req.body, 'name', 'email');
  // console.log(req.body, filteredBody);
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});
// For user use.
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// For admin use only. Get a specific user.
exports.getUser = factory.getOne(User);
// For admin use only. Do not update passwords with this.
exports.updateUser = factory.updateOne(User);
// For admin use only. Delete a user from the database.
exports.deleteUser = factory.deleteOne(User);
// For admin use only. Create a user **does not automatically login as created user
exports.createUser = factory.createOne(User);
