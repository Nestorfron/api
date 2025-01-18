'use strict';


/**
 * Retrieve all job offers
 *
 * no response value expected for this operation
 **/
exports.joboffersGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a job offer by ID
 *
 * id  The ID of the job offer to delete.
 * no response value expected for this operation
 **/
exports.joboffersIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a job offer by ID
 *
 * id  The ID of the job offer to retrieve.
 * returns JobOffer
 **/
exports.joboffersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "salary_range_max" : "",
  "ID_job_category" : "",
  "ID_modality" : "",
  "salary_range_min" : "",
  "ID_city" : "",
  "description" : "",
  "publication_date" : "",
  "title" : "",
  "deadline" : "",
  "ID_user" : "",
  "ID_offer" : "",
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
 * Update a job offer by ID
 *
 * body JobOfferInput 
 * id  The ID of the job offer to update.
 * returns JobOffer
 **/
exports.joboffersIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "salary_range_max" : "",
  "ID_job_category" : "",
  "ID_modality" : "",
  "salary_range_min" : "",
  "ID_city" : "",
  "description" : "",
  "publication_date" : "",
  "title" : "",
  "deadline" : "",
  "ID_user" : "",
  "ID_offer" : "",
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
 * Create a new job offer
 *
 * body JobOfferInput 
 * returns JobOffer
 **/
exports.joboffersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "salary_range_max" : "",
  "ID_job_category" : "",
  "ID_modality" : "",
  "salary_range_min" : "",
  "ID_city" : "",
  "description" : "",
  "publication_date" : "",
  "title" : "",
  "deadline" : "",
  "ID_user" : "",
  "ID_offer" : "",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

