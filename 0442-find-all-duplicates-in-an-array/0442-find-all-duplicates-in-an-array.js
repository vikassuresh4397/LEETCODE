/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj={};
    for(let a=0;a<=nums.length-1;a++){
        if(obj[nums[a]]==undefined){
            obj[nums[a]]=1
        }else{
            obj[nums[a]]++
        }
    }


    let arr=[];

    for(let key in obj){
        if(obj[key]!=1){
            arr.push(key)
        }
    }

    return arr
};