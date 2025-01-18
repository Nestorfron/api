'use strict';

var utils = require('../utils/writer.js');
var JobOffers = require('../service/JobOffersService');

module.exports.joboffersGET = function joboffersGET (req, res, next) {
  JobOffers.joboffersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joboffersIdDELETE = function joboffersIdDELETE (req, res, next, id) {
  JobOffers.joboffersIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joboffersIdGET = function joboffersIdGET (req, res, next, id) {
  JobOffers.joboffersIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joboffersIdPUT = function joboffersIdPUT (req, res, next, body, id) {
  JobOffers.joboffersIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joboffersPOST = function joboffersPOST (req, res, next, body) {
  JobOffers.joboffersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
