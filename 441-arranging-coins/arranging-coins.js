/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count=n,row=0;
    for(let a=1;a<=n;a++){
       count=count-a;
        if(count<0){
            return row
        }else{
            row++;
        }
    }
    
    return row
};