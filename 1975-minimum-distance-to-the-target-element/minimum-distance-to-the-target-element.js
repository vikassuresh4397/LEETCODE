/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let brr=[]
    for(let a=0;a<=nums.length-1;a++){
        if(nums[a]==target){
           
            brr.push(Math.abs(a-start)) 
        }
    }
    
    brr.sort(function(a,b){
        return a-b
    });
    
    return brr[0]
};