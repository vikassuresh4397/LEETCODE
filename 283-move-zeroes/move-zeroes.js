/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr=[];

    for(let a=0;a<=nums.length-1;a++){
        if(nums[a]!==0){
            arr.push(nums[a])
        }
    }

    if(arr.length!==nums.length){
        let x=nums.length-arr.length;
        for(let a=0;a<=x-1;a++){
            arr.push(0)
        }

        for(let a=0;a<=arr.length-1;a++){
            nums[a]=arr[a]
        }
        return nums
    }else{
        return nums
    }
   
};