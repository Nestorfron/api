'use strict';

var utils = require('../utils/writer.js');
var ApplicationStatuses = require('../service/ApplicationStatusesService');

module.exports.application_statusesGET = function application_statusesGET (req, res, next) {
  ApplicationStatuses.application_statusesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.application_statusesIdDELETE = function application_statusesIdDELETE (req, res, next, id) {
  ApplicationStatuses.application_statusesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.application_statusesIdGET = function application_statusesIdGET (req, res, next, id) {
  ApplicationStatuses.application_statusesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.application_statusesIdPUT = function application_statusesIdPUT (req, res, next, body, id) {
  ApplicationStatuses.application_statusesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.application_statusesPOST = function application_statusesPOST (req, res, next, body) {
  ApplicationStatuses.application_statusesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
