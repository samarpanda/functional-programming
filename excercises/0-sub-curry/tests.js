var assert = require('../assert');

var fn = function(a, b, c) {
	return [a, b, c];
};

exports.run = () => {
	assert(!!typeof(fn), 'fn to be a function');
};