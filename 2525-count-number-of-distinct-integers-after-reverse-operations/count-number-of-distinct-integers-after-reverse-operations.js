/**
 * @param {number[]} nums
 * @return {number}
 */
// var countDistinctIntegers = function(nums) {
    


// let obj={};

// for(let a=0;a<=nums.length-1;a++){
//     let x=+(nums[a].toString().split('').reverse().join(''));
  
   
//     obj[nums[a]]=1;
//     obj[x]=1;
//     // console.log(typeof(x))
// }







// return Object.keys(obj).length
// };

var countDistinctIntegers = function(nums) {
    let n = nums.length;
    let obj = {}
    for(var x of nums)
        obj[+x] = 1;
    for(let j=0; j<n; j++)
        {
            let num = +(nums[j].toString().split("").reverse().join(""))
            obj[num] =1
        }
    return Object.keys(obj).length
};