'use strict';

var utils = require('../utils/writer.js');
var Modalities = require('../service/ModalitiesService');

module.exports.modalitiesGET = function modalitiesGET (req, res, next) {
  Modalities.modalitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modalitiesIdDELETE = function modalitiesIdDELETE (req, res, next, id) {
  Modalities.modalitiesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modalitiesIdGET = function modalitiesIdGET (req, res, next, id) {
  Modalities.modalitiesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modalitiesIdPUT = function modalitiesIdPUT (req, res, next, body, id) {
  Modalities.modalitiesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modalitiesPOST = function modalitiesPOST (req, res, next, body) {
  Modalities.modalitiesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
