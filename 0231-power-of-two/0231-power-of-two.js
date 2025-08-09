/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==0){
        return false
    }

    if(n==1){
        return true
    }
   let sum=0,rum=0
    for(let a=1;a<=Math.ceil(n**0.5);a++){
         let x=2**a;
       if(x==n){
               return true
         
    }
    }

    return false


};