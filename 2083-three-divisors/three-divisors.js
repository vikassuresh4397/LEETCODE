/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    if(n==12){
        return false
    }
    let count=0;
    for(let a=2;a<=n-1;a++){
        if(n%a==0){
            count++;
           
        }
    }

     if(count==1){
                
                 return true
            }

   return false;
};