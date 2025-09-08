/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(arr) {
    let count=0
    for(let a=0;a<=arr.length-1;a++){
        for(let b=a+1;b<=arr.length-1;b++){
            let sum=arr[a]+arr[b];
            if(sum%24==0){
                count++
            }
        }
    }
    return count
};