/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let arr=[];
    nums.sort(function(a,b){
        return a-b
    });

    for(let a=0;a<=nums.length-1;a++){
        if(nums[a]==target){
           arr.push(a)
        }

        if(nums[a]>target){
            return arr
        }
    }

    return arr
};