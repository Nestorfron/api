'use strict';


/**
 * Retrieve all notifications
 *
 * no response value expected for this operation
 **/
exports.notificationsGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a notification by ID
 *
 * id  The ID of the notification to delete.
 * no response value expected for this operation
 **/
exports.notificationsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a notification by ID
 *
 * id  The ID of the notification to retrieve.
 * returns Notification
 **/
exports.notificationsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "read" : "",
  "send_date" : "",
  "ID_job_offer" : "",
  "ID_notification" : "",
  "message" : "",
  "type" : "",
  "ID_user" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a notification by ID
 *
 * body NotificationInput 
 * id  The ID of the notification to update.
 * returns Notification
 **/
exports.notificationsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "read" : "",
  "send_date" : "",
  "ID_job_offer" : "",
  "ID_notification" : "",
  "message" : "",
  "type" : "",
  "ID_user" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new notification
 *
 * body NotificationInput 
 * returns Notification
 **/
exports.notificationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "read" : "",
  "send_date" : "",
  "ID_job_offer" : "",
  "ID_notification" : "",
  "message" : "",
  "type" : "",
  "ID_user" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

