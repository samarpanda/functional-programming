var assert = require('../assert');
var compose = require('./compose').compose;
// var curry = require('../1-curry/curry').curry;
var app = require('./app');
var cmap = app.cmap;
var get = app.get;
var revCap = app.revCap;

var properNoun = app.properNoun;
var reverse = app.reverse;



var articles = [
  {
    title: 'Everything Sucks',
    url: 'http://do.wn/sucks.html',
    author: {
      name: 'Debbie Downer',
      email: 'debbie@do.wn'
    }
  },
  {
    title: 'If You Please',
    url: 'http://www.geocities.com/milq',
    author: {
      name: 'Caspar Milquetoast',
      email: 'hello@me.com'
    }
  }
];

exports.run = () => {
  /**
   * Test case: 1
   * Filter json using compose and map
   */
  var names = cmap(
    compose(get('name'), get('author'))
  );
  assert(names(articles).length === 2, "No. of articles needs to be 2.");

  /**
   * Test case: 2
   * Test composing of string utility functions
   */
  assert(revCap("samar") === 'ramaS', 'revCap of samar to be ramaS.')
};