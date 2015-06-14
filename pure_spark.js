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
 * Compose function
 */
function compose(g, f){
 return function(x){
  return g(f(x));
 }
}

/**
 * fork
 */
var fork = curry(function(lastly, f, g, x){
	return lastly(f(x), g(x));
});