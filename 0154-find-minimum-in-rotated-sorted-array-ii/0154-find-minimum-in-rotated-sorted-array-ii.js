/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {
    // let obj={};
    // for(let a=0;a<=arr.length-1;a++){
    //     if(obj)
    // }
    arr.sort(function(a,b){
        return a-b
    });
    return arr[0]
};