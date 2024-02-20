/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for(let a=0;a<=Math.ceil(n**(1/3));a++){
        let x=3**a;
        if(x==n){
            return true;
        }
    }
    return false
};