/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for(let a=num.length-1;a>=0;a--){
        if(+num[a]%2==1){
           return (num.slice(0,a+1));
            
        }
    }
    
    return ""
   
};