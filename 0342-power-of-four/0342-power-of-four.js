/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
     for(let a=0;a<=Math.ceil(n**(1/4));a++){
        let x=4**a;
        if(x==n){
            return true;
        }
    }
    return false
};