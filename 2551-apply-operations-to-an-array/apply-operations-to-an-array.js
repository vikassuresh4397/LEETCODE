/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let a=0;a<=nums.length-1;a++){
        if(nums[a]==nums[a+1]){
            nums[a]=nums[a]*2;
            nums[a+1]=0;
        }
    }
let brr=[]
    for(let a=0;a<=nums.length-1;a++){
       if(nums[a]!=0){
           brr.push(nums[a])
       }
    }

    let y=nums.length-brr.length;

    for(let a=0;a<=y-1;a++){
        brr.push(0)
    }

    return brr
};