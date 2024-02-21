/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(arr) {
    if(arr==0||arr==1) return 0;
    let count=0
    for(let a=2;a<=arr;a++){
        let sum=0;
        let str=""+a;
        for(let b=0;b<=str.length-1;b++){
            sum=sum+(+str[b])
        }
        if(sum%2==0){
            count++
        }
        
    }
    
    return count
};