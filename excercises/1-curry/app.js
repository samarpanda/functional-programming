var curry = require('./curry').curry;

/**
 * Get property of object
 */
function get (property, object) {
	return object[property];
}

/**
 * get curried version
 * Curried version supports delayed version of get
 */
var getCurry = curry(function(property, object){
  return object[property];
});

/**
 * Get PersonName from Object person
 */
function getPersonName (person) {
	return get('n', person);
}

/**
 * Curry implementation via Vanila javascript
 */
var splitFn = function(str, separator){
  return function(separator){
    return str.split(separator);
  }
}

exports.get = get;
exports.getCurry = getCurry;
exports.getPersonName = getPersonName;
exports.splitFn = splitFn;

require('./tests.js').run();