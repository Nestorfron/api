'use strict';


/**
 * Get all users
 * Retrieve a list of all users.
 *
 * no response value expected for this operation
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user
 * Remove a user from the database.
 *
 * id  ID of the user to delete.
 * no response value expected for this operation
 **/
exports.usersIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by ID
 * Retrieve a specific user by their ID.
 *
 * id  ID of the user to retrieve.
 * returns User
 **/
exports.usersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "",
  "registration_date" : "",
  "address" : "",
  "phone" : "",
  "ID_city" : "",
  "name" : "",
  "last_access_date" : "",
  "ID_user" : "",
  "email" : "",
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
 * Update a user
 * Update the details of a specific user.
 *
 * body UserInput 
 * id  ID of the user to update.
 * returns User
 **/
exports.usersIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "",
  "registration_date" : "",
  "address" : "",
  "phone" : "",
  "ID_city" : "",
  "name" : "",
  "last_access_date" : "",
  "ID_user" : "",
  "email" : "",
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
 * Create a new user
 * Add a new user to the database.
 *
 * body UserInput 
 * returns User
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "",
  "registration_date" : "",
  "address" : "",
  "phone" : "",
  "ID_city" : "",
  "name" : "",
  "last_access_date" : "",
  "ID_user" : "",
  "email" : "",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

