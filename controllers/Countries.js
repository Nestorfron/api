'use strict';

var utils = require('../utils/writer.js');
var Countries = require('../service/CountriesService');

module.exports.countriesGET = function countriesGET (req, res, next) {
  Countries.countriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.countriesIdDELETE = function countriesIdDELETE (req, res, next, id) {
  Countries.countriesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.countriesIdGET = function countriesIdGET (req, res, next, id) {
  Countries.countriesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.countriesIdPUT = function countriesIdPUT (req, res, next, body, id) {
  Countries.countriesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.countriesPOST = function countriesPOST (req, res, next, body) {
  Countries.countriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
