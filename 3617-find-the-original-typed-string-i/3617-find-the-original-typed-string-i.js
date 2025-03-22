/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(arr) {
   let count=1
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]==arr[a+1]){
            count++
        }
    }

    return count
       
};