'use strict';


/**
 * Retrieve all countries
 *
 * no response value expected for this operation
 **/
exports.countriesGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a country by ID
 *
 * id  The ID of the country to delete.
 * no response value expected for this operation
 **/
exports.countriesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a country by ID
 *
 * id  The ID of the country to retrieve.
 * returns Country
 **/
exports.countriesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Update a country by ID
 *
 * body CountryInput 
 * id  The ID of the country to update.
 * returns Country
 **/
exports.countriesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Create a new country
 *
 * body CountryInput 
 * returns Country
 **/
exports.countriesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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

