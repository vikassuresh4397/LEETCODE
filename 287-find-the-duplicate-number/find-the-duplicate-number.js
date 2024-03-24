/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj={};
    for(let a=0;a<=nums.length-1;a++){
        if(obj[nums[a]]==undefined){
           obj[nums[a]]=1 
        }else{
            return nums[a]
        }
    }
};