/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
   let sum=0
   while(n>1){
      if(n%2==0){
        n=n/2;
        sum=sum+n
      }else{
        let x=n
         n=(n-1)/2;
        sum=sum+(((x-1)/2)+1)
      }
   }

   return sum


};