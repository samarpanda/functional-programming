## Functional Programming Concepts

### Curry

```js
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
 * To Array
 */
function toArray (args) {
	return [].slice.call(args);
}
```

### Compose

```js
/**
 * Compose function
 */
function compose(g, f){
	return function(x){
		return g(f(x));
	}
}

/**
 * Reverse String
 */
function reverse(s){
	return s.split('').reverse().join('');
}

/**
 * Capitalize first Letter
 */
function properNoun(s){
	return s.charAt(0).toUpperCase() + s.slice(1);
}

//Example of compose functionality
var revCap = compose(reverse, properNoun);
console.log(revCap("samar"));//"ramaS"

```

Try an example [demo jsbin](http://jsbin.com/watisu/1/edit?js,console)

## Continue from here: 

- http://jsbin.com/jevag/edit?js,console  
- http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/

### Functor

### Monards