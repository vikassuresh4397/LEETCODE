/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0;

    // Iterate through all possible triplets using three loops
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                // Check if the elements are pairwise distinct
                if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
                    count++;
                }
            }
        }
    }

    return count;
};
