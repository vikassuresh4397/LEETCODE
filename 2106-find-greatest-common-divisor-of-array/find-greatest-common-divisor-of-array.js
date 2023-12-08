/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    // let small=0,big=0;
    nums.sort(function(a,b){
        return a-b
    });
    let small=nums[0],big=nums[nums.length-1];
    let max=1;
    
    // console.log(small,big)
    for(let a=1;a<=big;a++){
       if(max<a && (big%a==0&&small%a==0)){
            // console.log("a",a)
           max=a
       }
    }
    return max
};