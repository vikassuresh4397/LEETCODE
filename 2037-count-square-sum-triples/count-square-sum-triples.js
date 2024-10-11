/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count=0
    for(let a=1;a<=n-2;a++){
        let A=a**2;
        for(let b=a+1;b<=n-1;b++){
            let B=b**2;
            for(let c=b+1;c<=n;c++){
                let C=c**2;
                if(C==A+B){
                    count++
                }
            }
        }
    }
    return count*2
};