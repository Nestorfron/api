'use strict';

var utils = require('../utils/writer.js');
var Cities = require('../service/CitiesService');

module.exports.citiesGET = function citiesGET (req, res, next) {
  Cities.citiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.citiesIdDELETE = function citiesIdDELETE (req, res, next, id) {
  Cities.citiesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.citiesIdGET = function citiesIdGET (req, res, next, id) {
  Cities.citiesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.citiesIdPUT = function citiesIdPUT (req, res, next, body, id) {
  Cities.citiesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.citiesPOST = function citiesPOST (req, res, next, body) {
  Cities.citiesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
