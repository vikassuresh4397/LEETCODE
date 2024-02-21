/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    let x=num+"";
    // if(num==0){
    //     return true
    // }
    // if(num.length==1){
    //     return false
    // }
    for(let a=0;a<=num;a++){
        let x=a+"",y="";
        for(let b=0;b<=x.length-1;b++){
            y=y+x[x.length-1-b]
        };
        
        let z=(+x)+(+y);
        if(z==num){
            return true
        }
    }
    
    return false
};