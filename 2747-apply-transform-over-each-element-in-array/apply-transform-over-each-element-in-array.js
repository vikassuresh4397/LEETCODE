/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let brr=[]
    for(let a=0;a<=arr.length-1;a++){
        brr.push(fn(arr[a],a))
    }

    return brr
};