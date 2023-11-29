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
    let arr = [...nums]
    nums.map((x)=> arr.push(parseInt(x.toString().split("").reverse().join(""))))
    return [...new Set(arr)].length
};