'use strict';

var utils = require('../utils/writer.js');
var ChangeHistories = require('../service/ChangeHistoriesService');

module.exports.change_historiesGET = function change_historiesGET (req, res, next) {
  ChangeHistories.change_historiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.change_historiesIdDELETE = function change_historiesIdDELETE (req, res, next, id) {
  ChangeHistories.change_historiesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.change_historiesIdGET = function change_historiesIdGET (req, res, next, id) {
  ChangeHistories.change_historiesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.change_historiesIdPUT = function change_historiesIdPUT (req, res, next, body, id) {
  ChangeHistories.change_historiesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.change_historiesPOST = function change_historiesPOST (req, res, next, body) {
  ChangeHistories.change_historiesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
