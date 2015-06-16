var _Container = function(val){
	this.val = val;
}

var Container = function(val){
	return new _Container(val);
}

_Container.prototype.map = function(f){
	return new Container(f(this.val));
}

var c = Container(2);
var d = c.map(function(x){
	return x+2;
});
console.log(d);