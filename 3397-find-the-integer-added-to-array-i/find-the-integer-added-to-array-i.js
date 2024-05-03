/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    nums2.sort(function(a,b){
        return a-b
    })
    nums1.sort(function(a,b){
        return a-b
    })
    return (nums2[0]-nums1[0])
};