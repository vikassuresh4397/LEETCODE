/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let a=0,b=arr.length-1;
    while(a<b){
        if(arr[a]+arr[b]==target){
            return [a+1,b+1]
        }else if(arr[a]+arr[b]<=target){
            a++;
        }else{
            b--;
        }
    }
    
    
};