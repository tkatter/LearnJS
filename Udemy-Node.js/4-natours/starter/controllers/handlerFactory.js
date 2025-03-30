const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    /*
    console.log(req.query);
    // BUILD QUERY
    // 1A) Filtering
    // const queryObj = { ...req.query };
    // const excludedFields = ['page', 'sort', 'limit', 'fields'];
    // excludedFields.forEach(el => delete queryObj[el]);
  
    // // 1B) Advanced Filtering
    // // http://server/api/v1/tours?difficulty=easy&price[lt]=1500
    // let queryStr = JSON.stringify(queryObj);
    // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    // // console.log(JSON.parse(queryStr));
  
    // let query = Tour.find(JSON.parse(queryStr));
  
    // 2) Sorting
    // http://server/api/v1/tours?sort=price,-ratingsAverage
    // if (req.query.sort) {
    //   const sortBy = req.query.sort.split(',').join(' ');
    //   query = query.sort(sortBy);
    // } else {
    //   query = query.sort('-ratingsAverage');
    // }
  
    // 3) Field Limiting
    // http://server/api/v1/tours?fields=name,duration,price
    // if (req.query.fields) {
    //   const fields = req.query.fields.split(',').join(' ');
    //   query = query.select(fields);
    // } else {
    //   query = query.select('-__v');
    //   // query = query.select('-__v -images -imageCover');
    // }
  
    // -) Ultimate example
    // http://server/api/v1/tours?difficulty=easy&price[lt]=1500&sort=price&fields=name,duration,difficulty,ratingsAverage,ratingsQuantity,price,maxGroupSize
  
    // 4) Pagination
    // query.limit(20); Specifies the maximum number of documents the query will return.
    // const page = req.query.page * 1 || 1;
    // const limit = req.query.limit * 1 || 50;
    // const skip = limit * (page - 1);
    // query = query.skip(skip).limit(limit);
  
    // // Throws error if trying to access a page past the total number of documents in the db
    // if (req.query.page) {
    //   const numTours = await Tour.countDocuments();
    //   if (skip >= numTours) throw new Error('This page does not exist');
    // }
  
    // EXECUTE QUERY
    // const tours = await Tour.find();
    const query = Tour.find()
      .where('duration')
      .equals(5)
      .where('difficulty')
      .equals('easy');
    */

    // To allow for nested GET reviews on tour
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        data: newDoc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    // If the popOptions parameter is passed through, then add the populate method to the query
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });
