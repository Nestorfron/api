'use strict';


/**
 * Retrieve all user roles
 *
 * no response value expected for this operation
 **/
exports.userrolesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user role by ID
 *
 * id  The ID of the user role to delete.
 * no response value expected for this operation
 **/
exports.userrolesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a user role by ID
 *
 * id  The ID of the user role to retrieve.
 * returns UserRole
 **/
exports.userrolesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_user_role" : "",
  "ID_role" : "",
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
 * Update a user role by ID
 *
 * body UserRoleInput 
 * id  The ID of the user role to update.
 * returns UserRole
 **/
exports.userrolesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_user_role" : "",
  "ID_role" : "",
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
 * Create a new user role
 *
 * body UserRoleInput 
 * returns UserRole
 **/
exports.userrolesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_user_role" : "",
  "ID_role" : "",
  "ID_user" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

