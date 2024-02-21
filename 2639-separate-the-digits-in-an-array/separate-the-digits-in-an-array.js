/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(arr) {
    let sum="";
    
    for(let a=0;a<=arr.length-1;a++){
        sum=sum+arr[a];
    }
    let brr=[]
    for(let a=0;a<=sum.length-1;a++){
        brr.push(+sum[a])
    }
    return brr
};