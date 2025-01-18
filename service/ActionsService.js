'use strict';


/**
 * Retrieve all actions
 *
 * no response value expected for this operation
 **/
exports.actionsGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an action by ID
 *
 * id  The ID of the action to delete.
 * no response value expected for this operation
 **/
exports.actionsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve an action by ID
 *
 * id  The ID of the action to retrieve.
 * returns Action
 **/
exports.actionsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description_action" : "",
  "name_action" : "",
  "ID_action" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an action by ID
 *
 * body ActionInput 
 * id  The ID of the action to update.
 * returns Action
 **/
exports.actionsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description_action" : "",
  "name_action" : "",
  "ID_action" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new action
 *
 * body ActionInput 
 * returns Action
 **/
exports.actionsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description_action" : "",
  "name_action" : "",
  "ID_action" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

