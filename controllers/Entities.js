'use strict';

var utils = require('../utils/writer.js');
var Entities = require('../service/EntitiesService');

module.exports.entitiesGET = function entitiesGET (req, res, next) {
  Entities.entitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.entitiesIdDELETE = function entitiesIdDELETE (req, res, next, id) {
  Entities.entitiesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.entitiesIdGET = function entitiesIdGET (req, res, next, id) {
  Entities.entitiesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.entitiesIdPUT = function entitiesIdPUT (req, res, next, body, id) {
  Entities.entitiesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.entitiesPOST = function entitiesPOST (req, res, next, body) {
  Entities.entitiesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
