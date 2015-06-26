var compose = require('./compose').compose;
var curry = require('../1-curry/curry').curry;

/**
 * logging composable function
 */
function log(x){
 console.log('logging: ', x);
 return x;
}

/**
 * Reverse String
 */
function reverse(s){
 return s.split('').reverse().join('');
}

/**
 * Capitalize first letter
 */
function properNoun(s){
 return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Composing string utility functions
 */
var revCap = compose(reverse, properNoun);

/**
 * Get property of object
 */
var get = curry(function(property, object) {
	return object[property];
});

/**
 * Map using curry
 */
var cmap = curry(function(fn, arr){
	return arr.map(fn);
});

exports.get = get;
exports.cmap = cmap;
exports.log = log;
exports.reverse = reverse;
exports.properNoun = properNoun;
exports.revCap = revCap;
require('./tests.js').run();