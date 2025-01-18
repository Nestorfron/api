'use strict';

var utils = require('../utils/writer.js');
var Roles = require('../service/RolesService');

module.exports.rolesGET = function rolesGET (req, res, next) {
  Roles.rolesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolesIdDELETE = function rolesIdDELETE (req, res, next, id) {
  Roles.rolesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolesIdGET = function rolesIdGET (req, res, next, id) {
  Roles.rolesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolesIdPUT = function rolesIdPUT (req, res, next, body, id) {
  Roles.rolesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolesPOST = function rolesPOST (req, res, next, body) {
  Roles.rolesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
