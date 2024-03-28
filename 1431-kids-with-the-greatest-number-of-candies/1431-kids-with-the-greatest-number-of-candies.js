/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(arr,k) {
    let max=-Infinity;
    for(let a=0;a<=arr.length-1;a++){
        if(max<arr[a]){
            max=arr[a]
        }
    }
    let crr=[];
    for(let a=0;a<=arr.length-1;a++){
        let x=arr[a]+k;
        if(x>=max){
            crr.push(true)
        }else{
            crr.push(false)
        }
    }
    
    return crr
    
    
};