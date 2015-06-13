var assert = require('../assert');
var app = require('./app');

var fn = function(a, b, c) {
	return [a, b, c];
};

var gResult = fn('a', 'b', 'c');
var subCurry1 = app.subCurry(fn, 'a'),
	result1 = subCurry1('b','c');

var subCurry2 = app.subCurry(fn, 'a', 'b'),
	result2 = subCurry2('c');

exports.run = () => {

	//General assertions
	assert(typeof(fn) === 'function', 'fn to be a function');
	assert(Object.prototype.toString.call(gResult) === '[object Array]', 'Returns an Array');
	assert(gResult instanceof Array, 'Verify if the return type is an Array')
	assert(Array.isArray(gResult), 'Alternatives of checking an Array')

	//sub_curry assertions
	assert(Array.isArray(result1), "Result1 is an Array");
	assert(Array.isArray(result2), "Result2 is an Array");
};