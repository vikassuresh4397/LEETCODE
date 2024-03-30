/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(arr) {
    let sum=0,brr=[0];
    for(let a=0;a<=arr.length-1;a++){
        sum=sum+arr[a];
        brr.push(+sum)
    };
    brr.sort(function(a,b){
        return b-a
    });
    return brr[0]
};