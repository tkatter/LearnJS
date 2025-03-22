// const fs = require('fs');
const Tour = require('./../models/tourModel');

// read tours-simple data file
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.aliasTopCheapTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price,-ratingsAverage';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllTours = async (req, res) => {
  try {
    console.log(req.query);
    // BUILD QUERY
    // 1A) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // 1B) Advanced Filtering
    // http://server/api/v1/tours?difficulty=easy&price[lt]=1500
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    // console.log(JSON.parse(queryStr));

    let query = Tour.find(JSON.parse(queryStr));

    // 2) Sorting
    // http://server/api/v1/tours?sort=price,-ratingsAverage
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-ratingsAverage');
    }

    // 3) Field Limiting
    // http://server/api/v1/tours?fields=name,duration,price
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
      // query = query.select('-__v -images -imageCover');
    }

    // -) Ultimate example
    // http://server/api/v1/tours?difficulty=easy&price[lt]=1500&sort=price&fields=name,duration,difficulty,ratingsAverage,ratingsQuantity,price,maxGroupSize

    // 4) Pagination
    // query.limit(20); Specifies the maximum number of documents the query will return.
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 50;
    const skip = limit * (page - 1);
    query = query.skip(skip).limit(limit);

    // Throws error if trying to access a page past the total number of documents in the db
    if (req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip >= numTours) throw new Error('This page does not exist');
    }

    // EXECUTE QUERY
    // const tours = await Tour.find();
    const tours = await query;
    /*
    const query = Tour.find()
      .where('duration')
      .equals(5)
      .where('difficulty')
      .equals('easy');
    */

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    // const newTour = new Tour({});
    // newTour.save();
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

/* Check ID Middleware
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length - 1) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  next();
};
*/

/* Check Body Middleware
exports.checkBody = (req, res, next) => {
  if (
    !req.body.name ||
    typeof req.body.name !== 'string' ||
    !req.body.price ||
    typeof req.body.price !== 'number'
  ) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};
*/

/* Original method
exports.createTour = (req, res) => {
  // Make a new ID
  const newId = tours[tours.length - 1].id + 1;
  // Replace the request ID with the new ID
  const newTour = Object.assign({ id: newId }, req.body);
  // Push the new tour to the original tours array
  tours.push(newTour);
  // Write this new tour addition to the original data file
  fs.writeFile(
    `${__dirname}./../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        tour: newTour,
      });
    }
  );
};
*/
