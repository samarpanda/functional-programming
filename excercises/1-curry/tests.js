var assert = require('../assert');
var curry = require('./curry').curry;
var app = require('./app');

var get = app.get;
var getCurry = app.getCurry;
var getPersonName = app.getPersonName;
var splitFn = app.splitFn;

/**
 * Sample Array of people
 */
var people = [
	{'n': 'Mark'},
	{'n': 'Marc'},
	{'n': 'Rayn'}
];

var str = "mississippi";

function appRequiredFunctions(app){
	return typeof app.get === 'function' &&
		typeof app.getPersonName === 'function' &&
		typeof app.splitFn === 'function';
}

/**
 * Maps works on the person object
 * Wraps back into and array and returns
 */
function showNamesInPeople(){
	var names1 = people.map(getPersonName);
	console.log(names1);

	var names2 = people.map(getCurry('n'));
	console.log(names2);
}

function usingApply(){
	var splitApply = splitFn.apply(null, [str]);
	console.log("Apply:", splitApply("i"));
}

function usingCall(){
	var splitCall = splitFn.call(null, str);
	console.log("Call:", splitCall("i"));
}

function usingCurry(){
	var splitCurry = curry(splitFn(str));
	console.log("Curry:", splitCurry("i"));
}

exports.run = () => {
	assert(appRequiredFunctions(app), 'App has all required functions');
	showNamesInPeople();
	usingApply();
	usingCall();
	usingCurry();
};