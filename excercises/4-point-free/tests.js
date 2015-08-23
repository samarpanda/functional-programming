var compose = require('../3-compose/compose').compose;
var app = require('./app');
var fork = app.fork;
var split = app.split;
var substring = app.substring;
var take = app.take;
var head = app.head;
var cmap = app.cmap;
var _ = app._;

exports.run = () => {

	var avg = fork(_.divide, _.sum, _.size);
	console.log(avg([1, 2, 3, 4, 5]));

	var arrayByDashes = split('-');
	console.log(arrayByDashes("What-Are-You-Up-To"));

	var firstChar = substring(0, 1);
	// console.log(firstChar("What-Are-You-Up-To"));

	var firstUpper = compose(_.toUpper, firstChar);
	console.log(firstUpper("What-Are-You-Up-To"));

	var getFirstUpperOfDashes = compose(cmap(firstUpper), arrayByDashes);
	console.log(getFirstUpperOfDashes("What-Are-You-Up-To"));

	var inneffecientHead = compose(head, take(2));
	console.log(inneffecientHead("What-Are-You-Up-To"));

	var check = compose(inneffecientHead, getFirstUpperOfDashes);
	console.log(check("What-Are-You-Up-To"));
};