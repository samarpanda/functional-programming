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

/**
 * split using curry
 */
var split = curry(function(separator, str){
	return str.split(separator);
});

/**
 * substring using curry
 */
var substring = curry(function(start, end, str){
	return str.substring(start, end);
});

/**
 * Return number of items from an Array
 */
var take = curry(function(num, arr){
	return arr.slice(0, num);
});

/**
 * Return the head item from an Array
 */
var head = curry(function(arr){
	return arr.slice(0, 1);
});

/**
 * Map using curry
 */
var cmap = curry(function(fn, arr){
	return arr.map(fn);
});

/**
 * Utility functions
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
	},
	toUpper: (s) => {
		return s.toUpperCase();
	}
}

var avg = fork(_.divide, _.sum, _.size);
console.log(avg([1,2,3,4,5]));

var arrayByDashes = split("-");
// console.log(arrayByDashes("What-Are-You-Up-To"));

var firstChar = substring(0, 1);
// console.log(firstChar("What-Are-You-Up-To"));

var firstUpper = compose(_.toUpper, firstChar);
// console.log(firstUpper("What-Are-You-Up-To"));

var getFirstUpperOfDashes = compose(cmap(firstUpper), arrayByDashes);
console.log(getFirstUpperOfDashes("What-Are-You-Up-To"));

var inneffecientHead = compose(head, take(2));
// console.log(inneffecientHead("What-Are-You-Up-To"));

var app = compose(inneffecientHead, getFirstUpperOfDashes);
console.log(app("What-Are-You-Up-To"));
