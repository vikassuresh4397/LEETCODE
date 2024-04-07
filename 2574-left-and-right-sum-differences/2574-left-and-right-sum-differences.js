/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(arr) {
     let right=0,last=[];
     let left=0;
     for(let a=0;a<=arr.length-1;a++){
         right=right+arr[a]
     }
    let leftArr=[0]
     for(let a=1;a<=arr.length-1;a++){
         left=left+arr[a-1]
         leftArr.push(left)
     }
    
    for(let a=0;a<=arr.length-1;a++){
        left=leftArr[a]
        
       right=right-arr[a];
        
        let sum=Math.abs(right-left);
        last.push(+sum)
    }
    
    return last
};