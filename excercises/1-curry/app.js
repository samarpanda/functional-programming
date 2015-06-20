var curry = require('./curry').curry;

/**
 * Get property of object
 */
function get (property, object) {
	return object[property];
}

/**
 * Get PersonName from Object person
 */
function getPersonName (person) {
	return get('n', person);
}

/**
 * Sample Array of people
 */
var people = [
	{'n': 'Mark'},
	{'n': 'Marc'},
	{'n': 'Rayn'}
];

var old_names = people.map(getPersonName);
console.log(old_names);

var getCurry = curry(function(property, object){
  return object[property];
});


var names = people.map(getCurry('n'));
console.log(names);


var splitFn = function(str, separator){
  return function(separator){
    return str.split(separator);
  }
}

var splitCurry1 = splitFn.apply(null, ["mississippi"]);
// console.log(splitCurry1("i"));

var splitCurry2 = splitFn.call(null, "mississippi");
// console.log(splitCurry2("i"));

var splitCurry3 = curry(splitFn("mississippi"));
// console.log(splitCurry3("i"));

require('./tests.js').run();