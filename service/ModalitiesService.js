'use strict';


/**
 * Retrieve all modalities
 *
 * no response value expected for this operation
 **/
exports.modalitiesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a modality by ID
 *
 * id  The ID of the modality to delete.
 * no response value expected for this operation
 **/
exports.modalitiesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a modality by ID
 *
 * id  The ID of the modality to retrieve.
 * returns Modality
 **/
exports.modalitiesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_modality" : "",
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
 * Update a modality by ID
 *
 * body ModalityInput 
 * id  The ID of the modality to update.
 * returns Modality
 **/
exports.modalitiesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_modality" : "",
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
 * Create a new modality
 *
 * body ModalityInput 
 * returns Modality
 **/
exports.modalitiesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_modality" : "",
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

