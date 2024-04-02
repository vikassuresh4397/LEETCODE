/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n%2==0){
        let x="";
        for(let a=0;a<=n-2;a++){
            x=x+"a"
        }
        
        x=x+"b";
        return x
    }else{
        let x="";
         for(let a=0;a<=n-1;a++){
            x=x+"a"
        }
        return x
    }
};