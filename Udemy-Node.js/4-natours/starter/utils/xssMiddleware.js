'use strict';

const xss = require('xss');

const sanitizeRequest = (req, res, next) => {
  // Sanitize req.body against XSS attacks
  if (req.body) {
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        req.body[key] = xss(req.body[key]);
      }
    }
  }

  // Sanitize req.query against XSS attacks
  if (req.query) {
    for (const key in req.query) {
      if (Object.hasOwnProperty.call(req.query, key)) {
        req.query[key] = xss(req.query[key]);
      }
    }
  }

  // Sanitize req.params against XSS attacks
  if (req.params) {
    for (const key in req.params) {
      if (Object.hasOwnProperty.call(req.params, key)) {
        req.params[key] = xss(req.params[key]);
      }
    }
  }

  next();
};

module.exports = sanitizeRequest;
