/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let a=0;a<=nums.length-1;a++){
        if(nums[a]==target){
            return a
        }else if(nums[a]<target){
            continue
        }else if(nums[a]>target){
            return a
        }
    }

    return nums.length
};