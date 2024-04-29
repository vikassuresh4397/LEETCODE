/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
let a=0,b=a+1;
    while(a<b && a<=arr.length-2){
        if(arr[a]+arr[b]==target){
            return [a,b]
        }else if(arr[a]+arr[b]!==target){
            if(b==arr.length-1){
                a++;
                b=a+1
            }else{
                b++;
            }
        }
    }
    
};