/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val=init;

    for(let a=0;a<=nums.length-1;a++){
        val=fn(val,nums[a])
    }

    return val
};