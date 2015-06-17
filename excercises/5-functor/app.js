var _Container = function(val){
	this.val = val;
}

var Container = function(val){
	return new _Container(val);
}

_Container.prototype.map = function(f){
	return new Container(f(this.val));
}

exports.Container = Container;

require('./tests.js').run();