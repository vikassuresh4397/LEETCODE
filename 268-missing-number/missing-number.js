/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let count=0;
    arr.sort(function(a,b){
        return a-b
    })
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]==count){
            count++;
        }else{
            return count
        }
    }
    return arr.length
};