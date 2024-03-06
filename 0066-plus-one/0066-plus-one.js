/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(crr) {
  
    
  let sum = BigInt(0); // Initialize sum as a BigInt
    
    // Iterate through the array, building the number as a BigInt
    for(let a = 0; a < crr.length; a++) {
        sum = sum * BigInt(10) + BigInt(crr[a]);
    }
    
    sum = sum + BigInt(1); // Add 1 to the BigInt sum
    sum=sum+"";
    let brr=[];
    for(let a=0;a<=sum.length-1;a++){
        brr.push(+sum[a])
    }
    return brr
    

 
   
};