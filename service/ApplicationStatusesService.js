'use strict';


/**
 * Retrieve all application statuses
 *
 * no response value expected for this operation
 **/
exports.application_statusesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an application status by ID
 *
 * id  The ID of the application status to delete.
 * no response value expected for this operation
 **/
exports.application_statusesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve an application status by ID
 *
 * id  The ID of the application status to retrieve.
 * returns ApplicationStatus
 **/
exports.application_statusesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_application_status" : "",
  "description" : "",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an application status by ID
 *
 * body ApplicationStatusInput 
 * id  The ID of the application status to update.
 * returns ApplicationStatus
 **/
exports.application_statusesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_application_status" : "",
  "description" : "",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new application status
 *
 * body ApplicationStatusInput 
 * returns ApplicationStatus
 **/
exports.application_statusesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_application_status" : "",
  "description" : "",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

