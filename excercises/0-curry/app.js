/**
 * To Array
 */
function toArray (args) {
	return [].slice.call(args);
}

/**
 * Curry Function
 */
function curry (fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	function f () {
		return fn.apply(this, args.concat(toArray(arguments)));
	}
	return f;
}