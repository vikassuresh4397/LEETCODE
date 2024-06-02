/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(arr) {
     let f=0,l=arr.length-1;

     while(l>f){
          let temp=arr[f];
          arr[f]=arr[l];
         arr[l]=temp;
         f++;
         l--
           }
    return arr
};