/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let x=num+"",count=0;
    
    for(let a=0;a<=x.length-1;a++){
        if(num%x[a]==0){
            count++
        }
    }
    return count
};