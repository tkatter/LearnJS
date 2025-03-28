const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

// SIGNUP/LOGIN
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// RESET/FORGOT PASSWORD
router.post('/forgotpassword', authController.forgotPassword);
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);
router.patch('/resetpassword/:token', authController.resetPassword);

// UPDATE DATA
router.patch('/updateMe', authController.protect, userController.updateMe);

// DELETE ACCOUNT
router.delete('/deleteMe', authController.protect, userController.deleteMe);

// STD
router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    userController.getAllUsers
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    userController.createUser
  );
router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    userController.getUser
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    userController.deleteUser
  );

module.exports = router;
