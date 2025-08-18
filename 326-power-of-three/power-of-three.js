/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let x=n%3, y=n%2;
      if(n==1){
        return true
    }
    if(n<=0 || x!=0 || y==0){
        return false
    }else{
        for(let a=0; a<=Math.floor(n**0.5); a++){
            let j=3**a;
            if(j==n){
                return true
            }
        }
        return false
    }
    
};