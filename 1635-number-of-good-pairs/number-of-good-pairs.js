/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count=0;
     for(let a=0;a<=nums.length-1;a++){
         for(let b=a+1;b<=nums.length-1;b++){
             if(nums[a]==nums[b]){
                  count++;
             }
         }
     }


     return count
};