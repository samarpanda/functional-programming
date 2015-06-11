/**
 * To Array
 */
function toArray (args) {
	return [].slice.call(args);
}

/**
 * Subcurry Function
 */
function sub_curry (fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	function f () {
		return fn.apply(this, args.concat(toArray(arguments)));
	}
	return f;
}

/**
 * Curry function
 */
var curry = function(fn){
	return function(){
		if(fn.length > arguments.length){
			var slice = Array.prototype.slice;
			var args = slice.apply(arguments);
			return function(){
				return fn.apply(null, args.concat(slice.apply(arguments)));
			};
		}else
		  return fn.apply(null, arguments);
	};
}

/**
 * Sample Array of people
 */
var people = [
	{'n': 'Mark'},
	{'n': 'Marc'},
	{'n': 'Rayn'}
];

/**
 * Get property of object
 */
function get (property, object) {
	return object[property];
}

var getCurry = curry(function(property, object){
  return object[property];
});

/**
 * Get PersonName from Object person
 */
function getPersonName (person) {
	return get('n', person);
}

// var names = people.map(getPersonName);
var names = people.map(getCurry('n'));
// console.log(names);


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

var fn = function(a, b, c) {
	return [a, b, c];
};

// console.log(fn("a", "b", "c"));
// console.log(sub_curry(fn, "a")("b", "c"));
console.log(sub_curry(fn, "a", "b")("c"));

