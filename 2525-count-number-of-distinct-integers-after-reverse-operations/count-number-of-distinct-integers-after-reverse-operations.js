/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    


let count=0,obj={};

for(let a=0;a<=nums.length-1;a++){
    let x=nums[a].toString().split('').reverse().join('');
    x=parseInt(x);
   
    obj[nums[a]]=1;
    obj[x]=1;
    // console.log(typeof(x))
}



for(let key in obj){
    count++
}



return count
};