/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let x=num**0.5;
    let y=Math.floor(x);
    if(x==y){
        return true
    }else {
        return false
    }
};