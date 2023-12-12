/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max=-Infinity;
    for(let a=0;a<=nums.length-2;a++){
        for(let b=a+1;b<=nums.length-1;b++){
            let product=(nums[a]-1)*(nums[b]-1);
            if(product>max){
                max=product
            }
        }
    }
    
    return max
};