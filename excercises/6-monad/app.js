/**
 * Identity
 */
var Identity = function(){

};

/**
 * Maybe
 */
var Maybe = function(value){
	var Nothing = {
		bind: function(fn){
			return this;
		},
		isNothing: function(){
			return true;
		},
		val: function(){
			throw new Error('Cannot call val of Nothing');
		},
		maybe: function(def, fn){
			return def;
		}
	};

	var Something = function(value){
		return {
			bind: function(fn){
				return Maybe(fn.call(this, value));
			},
			isNothing: function(){
				return false;
			},
			val: function(){
				return value;
			},
			maybe: function(def, fn){
				return fn.call(this, value);
			}
		};
	};

	if(typeof value === 'undefined' || value === null){
		return Nothing;
	}
	return Something(value);

};

/**
 * Either
 */
var Either = function(){

};

/**
 * Left
 */
var Left = function(){

};

/**
 * Right
 */
var Right = function(){

};