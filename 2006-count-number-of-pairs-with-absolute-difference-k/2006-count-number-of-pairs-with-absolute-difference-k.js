/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(arr, k) {
    let count=0
    for(let a=0;a<=arr.length-1;a++){
        for(let b=a;b<=arr.length-1;b++){
            if(a==b){
                continue;
            }else{
                if(Math.abs(arr[a]-arr[b])==k){
                    count++
                }
            }
        }
    }
    
    return count
};