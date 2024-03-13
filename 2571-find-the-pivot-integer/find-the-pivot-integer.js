/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sum=0,bum=0;
    for(let a=1;a<=n;a++){
        sum=sum+a;
        bum=0
        for(let b=a;b<=n;b++){
            bum=bum+b
        }
        if(bum==sum){
            return a
        }
    }
    
    return -1
};