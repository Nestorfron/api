'use strict';


/**
 * Retrieve all job categories
 *
 * no response value expected for this operation
 **/
exports.jobcategoriesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a job category by ID
 *
 * id  The ID of the job category to delete.
 * no response value expected for this operation
 **/
exports.jobcategoriesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a job category by ID
 *
 * id  The ID of the job category to retrieve.
 * returns JobCategory
 **/
exports.jobcategoriesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_job_category" : "",
  "name" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a job category by ID
 *
 * body JobCategoryInput 
 * id  The ID of the job category to update.
 * returns JobCategory
 **/
exports.jobcategoriesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_job_category" : "",
  "name" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new job category
 *
 * body JobCategoryInput 
 * returns JobCategory
 **/
exports.jobcategoriesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_job_category" : "",
  "name" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

