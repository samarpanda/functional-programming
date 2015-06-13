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

exports.subCurry = sub_curry;

//Run result
require('./tests.js').run();

