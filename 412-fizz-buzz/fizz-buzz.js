/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr=[];
    
    for(let a=1;a<=n;a++){
           if(a%3==0 && a%5==0){
        arr.push("FizzBuzz")
    }else if(a%3==0){
         arr.push("Fizz")    
    }else if(a%5==0){
         arr.push("Buzz")    
    }else {
   
        arr.push(a+"")
    }
    }
 
    
    return arr
};