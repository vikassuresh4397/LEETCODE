/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count=0;
     let rum=0;
    for(let a=0;a<=nums.length-1;a++){
        rum=0;
        for(let b=a+1;b<=nums.length-1;b++){
            if(rum==1){
                break;
            }
            if(nums[b]-nums[a]==diff){
                for(let c=b+1;c<=nums.length-1;c++){
                    rum=1;
                   if(nums[c]-nums[b]==diff){
                        count++;
                        break;
                   }
                }
            }
        }
    }
    return count;
};