/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(arr) {
   let count=0;
   for(let a=0;a<=arr.length-1;a++){
      if(arr[a]<=0){
        continue
      }else{
        if(a==0){
          count++;
        }else{
          arr[a]=arr[a]-count;
          if(arr[a]<=0){
        continue
      }else{
         count++;
      }
         
        }
        
      }
   }
   return count
};