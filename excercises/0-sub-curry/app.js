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

require('./tests.js').run();

// console.log(fn("a", "b", "c"));
// console.log(sub_curry(fn, "a")("b", "c"));
// console.log(sub_curry(fn, "a", "b")("c"));

