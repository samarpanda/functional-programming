var assert = require('../assert');
var app = require('./app');

var getPersonName = app.getPersonName;
var get = app.get;
var splitFn = app.splitFn;

/**
 * Sample Array of people
 */
var people = [
	{'n': 'Mark'},
	{'n': 'Marc'},
	{'n': 'Rayn'}
];

function appRequiredFunctions(app){
	return typeof app.get === 'function' &&
		typeof app.getPersonName === 'function' &&
		typeof app.splitFn === 'function';
}

function showNamesInPeople(){
	var names = people.map(getPersonName);
	console.log(names);
}

exports.run = () => {
	assert(appRequiredFunctions(app), 'App has all required functions');
	showNamesInPeople();
};