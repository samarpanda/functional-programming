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
 * Utility function
 */
var _ = {
	divide: (x, y) => {
		return x/y;
	},
	sum: (x) => {
		return x.reduce(function(prev, curr, index, arr){
			return prev + curr;
		}, 0);
	},
	size: (x) => {
		return x.length;
	}
}

/**
 * fork
 */
var fork = curry(function(lastly, f, g, x){
	return lastly(f(x), g(x));
});

var avg = fork(_.divide, _.sum, _.size);
console.log(avg([1,2,3,4,5]));