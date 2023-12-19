/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    
    let r=[],l=[],m=[];
    // for(let a=0;a<=nums.length-1;a++){
    //     arr.push(nums[a])
    // }
    
    for(let a=0;a<=nums.length-1;a++){
        
        if(nums[a]>pivot){
            r.push(nums[a])
        }else if(nums[a]<pivot){
            l.push(nums[a])
        }else{
            m.push(nums[a])
        }
        
    }
    
    
    let arr=[...l,...m,...r];
    
    return arr
    
    
};