/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    })
    let max=-1;

    for(let a=0;a<=nums.length-1;a++){

        if(nums[a]>0){
            

   let x=(-1*nums[a]);
       
       for(let b=0;b<=nums.length-1;b++){
         if(nums[b]==x && max<nums[a]){
           max=nums[a]
         }
       }


        }
     
    }

    return max
};