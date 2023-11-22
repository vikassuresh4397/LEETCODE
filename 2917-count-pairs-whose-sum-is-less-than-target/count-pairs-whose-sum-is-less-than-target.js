/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    
    let count=0;
    for(let a=0;a<=nums.length-1;a++){
        for(let b=a+1;b<=nums.length-1;b++){
            if(a<b && b<nums.length){
                let x=nums[a]+nums[b]
                if(x<target){
count++;
                }
            }
        }
    }

    return count
};