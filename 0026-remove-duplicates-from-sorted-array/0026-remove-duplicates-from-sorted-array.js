/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let obj={};
    let u=0;
    for(let a=0;a<=nums.length-1;a++){
        if(obj[nums[a]]==undefined){
           obj[nums[a]]=1;
           nums[u]=nums[a];
           u++; 
        }
    }

    return u
};