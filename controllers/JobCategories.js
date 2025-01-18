'use strict';

var utils = require('../utils/writer.js');
var JobCategories = require('../service/JobCategoriesService');

module.exports.jobcategoriesGET = function jobcategoriesGET (req, res, next) {
  JobCategories.jobcategoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobcategoriesIdDELETE = function jobcategoriesIdDELETE (req, res, next, id) {
  JobCategories.jobcategoriesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobcategoriesIdGET = function jobcategoriesIdGET (req, res, next, id) {
  JobCategories.jobcategoriesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobcategoriesIdPUT = function jobcategoriesIdPUT (req, res, next, body, id) {
  JobCategories.jobcategoriesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobcategoriesPOST = function jobcategoriesPOST (req, res, next, body) {
  JobCategories.jobcategoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
