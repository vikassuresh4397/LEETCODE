/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(let a=0;a<=Math.ceil(n**0.5);a++){
        let x= 2**a;
        if(x==n){
            return true
        }
    }
    
    return false
};