'use strict';


/**
 * Retrieve all roles
 *
 * no response value expected for this operation
 **/
exports.rolesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a role by ID
 *
 * id  The ID of the role to delete.
 * no response value expected for this operation
 **/
exports.rolesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a role by ID
 *
 * id  The ID of the role to retrieve.
 * returns Role
 **/
exports.rolesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "",
  "description" : "",
  "ID_role" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a role by ID
 *
 * body RoleInput 
 * id  The ID of the role to update.
 * returns Role
 **/
exports.rolesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "",
  "description" : "",
  "ID_role" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new role
 *
 * body RoleInput 
 * returns Role
 **/
exports.rolesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "",
  "description" : "",
  "ID_role" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

