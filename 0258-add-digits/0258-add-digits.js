/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(arr) {
    arr=arr+"";
    let sum=0;
    for(let a=0;a<=arr.length-1;a++){
        sum=(+arr[a])+sum;
    }
    
    sum=sum+"";
    if(sum.length==1){
        return sum
    }else{
       return addDigits(+(sum)) 
    }
    
};