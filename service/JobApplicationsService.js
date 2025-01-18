'use strict';


/**
 * Retrieve all job applications
 *
 * no response value expected for this operation
 **/
exports.jobapplicationsGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a job application by ID
 *
 * id  The ID of the job application to delete.
 * no response value expected for this operation
 **/
exports.jobapplicationsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a job application by ID
 *
 * id  The ID of the job application to retrieve.
 * returns JobApplication
 **/
exports.jobapplicationsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_application" : "",
  "comments" : "",
  "ID_application_status" : "",
  "application_date" : "",
  "ID_job_offer" : "",
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
 * Update a job application by ID
 *
 * body JobApplicationInput 
 * id  The ID of the job application to update.
 * returns JobApplication
 **/
exports.jobapplicationsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_application" : "",
  "comments" : "",
  "ID_application_status" : "",
  "application_date" : "",
  "ID_job_offer" : "",
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
 * Create a new job application
 *
 * body JobApplicationInput 
 * returns JobApplication
 **/
exports.jobapplicationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_application" : "",
  "comments" : "",
  "ID_application_status" : "",
  "application_date" : "",
  "ID_job_offer" : "",
  "ID_user" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

