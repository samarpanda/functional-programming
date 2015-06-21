/**
 * Compose function
 */
function compose(g, f){
 return function(x){
  return g(f(x));
 }
}

exports.compose = compose;