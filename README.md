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

### Category Theory

- compose  
- identity  

#### Category Laws

- left identity: `compose(id, f) == f`  
- right identity: `compose(f, id) == f`  
- associativity: `compose(compose(f, g), h) == compose(f,compose(g,h))`  


#### Some conventions

Objects:

```js
var _Container = function(val){
	this.val = val;
}

var Container = function(x){
	return new _Container(x);
}

Container(3);
//=> _Container{val:3}

var _Container.prototype.map = function(f){
	return Container(f(this.val));
}

Container("ram").map(capitalize);
//=> Container("Ram");

```


### Functor

An object or data structure you can map over.

functions: map

1. maybe  


### Monards

## Benifits of Functional programming:

- Nulls, Callbacks, Errors, Side effects

