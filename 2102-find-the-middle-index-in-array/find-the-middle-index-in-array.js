/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(arr) {
     let left=0,right=0;
  for(let a=1;a<=arr.length-1;a++){
      right=arr[a]+right
  }
  
  if(right==left){
      return 0
  }
  
  for(let a=1;a<=arr.length-1;a++){
      left=left+arr[a-1];
      right=right-arr[a];
      if(right==left){
          return a
      }
  }
  return -1
};