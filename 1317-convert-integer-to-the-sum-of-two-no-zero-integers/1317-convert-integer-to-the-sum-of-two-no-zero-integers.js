/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
 for(let a=1;a<=n;a++){
     
     let x=a+"";
     let y=n-a;
     y=y+"";
     
     if(x.includes("0")||y.includes("0")){
         continue;
     }else{
         x=Number(x);
         y=Number(y);
         return [x,y]
     }
     
 }
    
    
};