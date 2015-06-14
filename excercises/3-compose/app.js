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
 * Capitalize first letter
 */
function properNoun(s){
 return s.charAt(0).toUpperCase() + s.slice(1);
}


var revCap = compose(reverse, properNoun);
console.log(revCap("samar"));


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

var names = _.map(
  compose(get('name'), get('author'))
);