'use strict';

var utils = require('../utils/writer.js');
var JobApplications = require('../service/JobApplicationsService');

module.exports.jobapplicationsGET = function jobapplicationsGET (req, res, next) {
  JobApplications.jobapplicationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobapplicationsIdDELETE = function jobapplicationsIdDELETE (req, res, next, id) {
  JobApplications.jobapplicationsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobapplicationsIdGET = function jobapplicationsIdGET (req, res, next, id) {
  JobApplications.jobapplicationsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobapplicationsIdPUT = function jobapplicationsIdPUT (req, res, next, body, id) {
  JobApplications.jobapplicationsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobapplicationsPOST = function jobapplicationsPOST (req, res, next, body) {
  JobApplications.jobapplicationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
