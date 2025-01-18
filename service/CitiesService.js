'use strict';


/**
 * Retrieve all cities
 *
 * no response value expected for this operation
 **/
exports.citiesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a city by ID
 *
 * id  The ID of the city to delete.
 * no response value expected for this operation
 **/
exports.citiesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a city by ID
 *
 * id  The ID of the city to retrieve.
 * returns City
 **/
exports.citiesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_city" : "",
  "ID_country" : "",
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
 * Update a city by ID
 *
 * body CityInput 
 * id  The ID of the city to update.
 * returns City
 **/
exports.citiesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_city" : "",
  "ID_country" : "",
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
 * Create a new city
 *
 * body CityInput 
 * returns City
 **/
exports.citiesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ID_city" : "",
  "ID_country" : "",
  "name" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

