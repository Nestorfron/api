'use strict';

var utils = require('../utils/writer.js');
var Actions = require('../service/ActionsService');

module.exports.actionsGET = function actionsGET (req, res, next) {
  Actions.actionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.actionsIdDELETE = function actionsIdDELETE (req, res, next, id) {
  Actions.actionsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.actionsIdGET = function actionsIdGET (req, res, next, id) {
  Actions.actionsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.actionsIdPUT = function actionsIdPUT (req, res, next, body, id) {
  Actions.actionsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.actionsPOST = function actionsPOST (req, res, next, body) {
  Actions.actionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
