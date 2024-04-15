/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(arr) {
    arr=arr.split("");
     let alpha="abcdefghijklmnopqrstuvwxyz";
    
    for(let a=0;a<=arr.length-1;a++){
        if(a%2!==0){
          let x=+arr[a];
          let y=+alpha.indexOf(arr[a-1])
            let total=(x+y)%26;
            //  console.log(total,arr[a],alpha.indexOf(arr[a-1]))
            arr[a]=alpha[total]
        }
    }
    
    return arr.join("")
};