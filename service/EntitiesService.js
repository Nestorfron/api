'use strict';


/**
 * Retrieve all entities
 *
 * no response value expected for this operation
 **/
exports.entitiesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an entity by ID
 *
 * id  The ID of the entity to delete.
 * no response value expected for this operation
 **/
exports.entitiesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve an entity by ID
 *
 * id  The ID of the entity to retrieve.
 * returns Entity
 **/
exports.entitiesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_entity" : "",
  "name" : "",
  "description" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an entity by ID
 *
 * body EntityInput 
 * id  The ID of the entity to update.
 * returns Entity
 **/
exports.entitiesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_entity" : "",
  "name" : "",
  "description" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new entity
 *
 * body EntityInput 
 * returns Entity
 **/
exports.entitiesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_entity" : "",
  "name" : "",
  "description" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

