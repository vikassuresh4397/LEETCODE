/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
let x=dividend/divisor;

if(x==2147483648){
    return 2147483647
}
else if(x>0){
    return Math.floor(x)
}else{
    return Math.ceil(x)
}

};