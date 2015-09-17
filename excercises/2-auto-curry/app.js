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

/**
 * Auto Curry function
 */
function autoCurry (fn, numArgs) {
	numArgs = numArgs || fn.length;
	function f () {
		if( arguments.length < numArgs ) {
			return numArgs - arguments.length > 0 ?
				autoCurry(curry.apply(this, [fn].concat(toArray(arguments))), numArgs - arguments.length) :
				curry.apply(this, [fn].concat(toArray(arguments)));
		} else {
			return fn.apply(this, arguments);
		}
	}
	f.toString = function () {
		return fn.toString();
	};
	f.curried = true;
	return f;
}


var add = function(x, y){
  return x + y;
};

var addCurry = autoCurry(add);
var add1 = addCurry(1);
//console.log(add1);
console.log(add1(2));

exports.autoCurry = autoCurry;