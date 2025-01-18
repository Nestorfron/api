'use strict';

var utils = require('../utils/writer.js');
var Notifications = require('../service/NotificationsService');

module.exports.notificationsGET = function notificationsGET (req, res, next) {
  Notifications.notificationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsIdDELETE = function notificationsIdDELETE (req, res, next, id) {
  Notifications.notificationsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsIdGET = function notificationsIdGET (req, res, next, id) {
  Notifications.notificationsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsIdPUT = function notificationsIdPUT (req, res, next, body, id) {
  Notifications.notificationsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsPOST = function notificationsPOST (req, res, next, body) {
  Notifications.notificationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
