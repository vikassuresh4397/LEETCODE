/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(arr, k) {
   
    // console.log(brr);
  
    let nos,crr=[]
    for(let a=0;a<=arr.length-1;a++){
        nos=(a+k)%(arr.length);
        crr.push(arr[nos])
    }
    return (crr.join(""))
};