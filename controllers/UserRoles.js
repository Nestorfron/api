'use strict';

var utils = require('../utils/writer.js');
var UserRoles = require('../service/UserRolesService');

module.exports.userrolesGET = function userrolesGET (req, res, next) {
  UserRoles.userrolesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userrolesIdDELETE = function userrolesIdDELETE (req, res, next, id) {
  UserRoles.userrolesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userrolesIdGET = function userrolesIdGET (req, res, next, id) {
  UserRoles.userrolesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userrolesIdPUT = function userrolesIdPUT (req, res, next, body, id) {
  UserRoles.userrolesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userrolesPOST = function userrolesPOST (req, res, next, body) {
  UserRoles.userrolesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
