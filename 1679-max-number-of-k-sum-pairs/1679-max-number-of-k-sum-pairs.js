/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(arr, k) {
    let a=0,b=arr.length-1,sum=0,count=0;
    arr.sort(function(a,b){
        return a-b
    })
    while(a<b){
       sum= arr[a]+arr[b];
        if(sum==k){
            count++;
            a++;
            b--
        }else if(sum>k){
            b--
        }else{
            a++
        }
    }
    return count
};