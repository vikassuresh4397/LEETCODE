/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr=[];
    for(let a=0;a<=arr.length-1;a++){
        if(fn(arr[a],a)){
           filteredArr.push(arr[a])

        }
    }
    return filteredArr
};