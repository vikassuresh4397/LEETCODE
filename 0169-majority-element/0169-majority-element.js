/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={};
    for(let a=0;a<=nums.length-1;a++){
        if(obj[nums[a]]==undefined){
            obj[nums[a]]=1
        }else{
            obj[nums[a]]++
        }
    }
   let max=0,boom; 
    for(let key in obj){
        if(obj[key]>max){
            max=obj[key];
            boom=key
        }
    }
    return boom
};