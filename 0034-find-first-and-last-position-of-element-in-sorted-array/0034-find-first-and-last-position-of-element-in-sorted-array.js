/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let count=0,first=-1,last=-1;
  for(let a=0;a<=nums.length-1;a++){
      if(nums[a]==target){
          count++;
          if(count==1){
             first=a;
             last=a;
          }else{
              last=a
          }
      }
  }

  return [first,last]
};