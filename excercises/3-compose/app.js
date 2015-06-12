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