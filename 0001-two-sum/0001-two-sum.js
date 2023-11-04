/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sum=0;
   for(let a=0;a<=nums.length-1;a++){
       for(let b=a+1;b<=nums.length-1;b++){
 sum=nums[a]+nums[b];
              if(sum==target){
                 return [a,b]; 
              
          } 
       }
   };
    
};