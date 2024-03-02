/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
    let brr=[];
    for(let a=0;a<=arr.length-1;a++){
        brr.push(arr[a]**2)
    };
    
    let x=brr.sort(function(a,b){
        return a-b
    });
    return x
};