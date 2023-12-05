/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
   let ones= ["","I","II","III","IV","V","VI","VII","VIII","IX"];
   let tens= ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
   let hundred= ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
   let thousand= ["","M","MM","MMM"];

    return thousand[Math.floor(num/1000)]+hundred[Math.floor((num%1000)/100)]+tens[Math.floor((num%100)/10)]+ones[Math.floor((num%10))]


};