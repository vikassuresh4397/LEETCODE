/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(l, w, h, m) {
    let volume=l*w*h;
//     The box is "Bulky" if:
// Any of the dimensions of the box is greater or equal to 104.
// Or, the volume of the box is greater or equal to 109.
// If the mass of the box is greater or equal to 100, it is "Heavy".
// If the box is both "Bulky" and "Heavy", then its category is "Both".
// If the box is neither "Bulky" nor "Heavy", then its category is "Neither".
// If the box is "Bulky" but not "Heavy", then its category is "Bulky".
// If the box is "Heavy" but not "Bulky", then its category is "Heavy".
let bulky=0,heavy=0
if(l>=(10**4)||w>=(10**4)){
    bulky++
}
if(h>=(10**4)||volume>=(10**9)){
     bulky++
}
if(m>=100){
    heavy++
}

if(bulky>=1 && heavy==1){
    return "Both"
}else if(bulky>=1 && heavy==0){
    return "Bulky"
}else if(bulky==0 && heavy==1){
    return "Heavy"
}else if(m>=100){
    return "Heavy"
}else if(bulky==0 && heavy==0){
    return "Neither"
}




};