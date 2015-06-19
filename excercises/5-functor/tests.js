var assert = require('../assert');
var app = require('./app');

function containerAddOperation(){
	var c = app.Container(2);
	var d = c.map(function(x){
		return x+2;
	});
	assert(d.val === 4, "Add operation on Container");
}

exports.run = () => {
	containerAddOperation();
};