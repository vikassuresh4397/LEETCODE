/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(arr) {
    let sum=0;
        
        arr=arr+"";
    for(let a=0;a<=arr.length-1;a++){
        if(a%2==0){
            sum=sum+(+arr[a])
        }else{
             sum=sum-(+arr[a])
        }
    }
    
    return sum
};