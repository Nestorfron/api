'use strict';


/**
 * Retrieve all change histories
 *
 * no response value expected for this operation
 **/
exports.change_historiesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a change history record by ID
 *
 * id  The ID of the change history record to delete.
 * no response value expected for this operation
 **/
exports.change_historiesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a change history record by ID
 *
 * id  The ID of the change history record to retrieve.
 * returns ChangeHistory
 **/
exports.change_historiesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "change_description" : "",
  "ID_entity" : "",
  "change_date" : "",
  "ID_action" : "",
  "ID_user" : "",
  "ID_change" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a change history record by ID
 *
 * body ChangeHistoryInput 
 * id  The ID of the change history record to update.
 * returns ChangeHistory
 **/
exports.change_historiesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "change_description" : "",
  "ID_entity" : "",
  "change_date" : "",
  "ID_action" : "",
  "ID_user" : "",
  "ID_change" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new change history record
 *
 * body ChangeHistoryInput 
 * returns ChangeHistory
 **/
exports.change_historiesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "change_description" : "",
  "ID_entity" : "",
  "change_date" : "",
  "ID_action" : "",
  "ID_user" : "",
  "ID_change" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

