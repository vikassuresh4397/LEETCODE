/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    
let brr=[];



for(let a=0;a<=nums.length-1;a++){
    let x=nums[a].toString().split('').reverse().join('');
    x=parseInt(x);
    brr.push(x)
    brr.push(nums[a])
    // console.log(typeof(x))
}

let count=0,obj={};

for(let a=0;a<=brr.length-1;a++){
    if(obj[brr[a]]==undefined){
       obj[brr[a]]=1;
       count++
    }
}



return count
};