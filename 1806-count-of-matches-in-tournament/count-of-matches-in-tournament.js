/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
   let sum=0
   while(n>=2){
      if(n%2==0){
        n=n/2;
        sum=sum+n
      }else{
       sum=sum+(((n-1)/2)+1)
         n=(n-1)/2;
        // sum=sum+(((x-1)/2)+1)
      }
   }

   return sum


};