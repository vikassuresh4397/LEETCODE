/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(arr, k) {
    let count=0
    for(let a=0;a<=arr.length-1;a++){
        for(let b=a+1;b<=arr.length-1;b++){
            if(arr[a]==arr[b]&&(a*b)%k==0){
                count++;
            }
        }
    }
    return count
};