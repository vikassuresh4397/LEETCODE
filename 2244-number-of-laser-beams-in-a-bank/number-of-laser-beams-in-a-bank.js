/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(arr) {
let x=[];
    for(let a=0;a<=arr.length-1;a++){
        let count=0;
        for(let b=0;b<=arr[a].length-1;b++){
            if(arr[a][b]=="1"){
                count++;
            }
        }
        if(count!=0){
             x.push(count);
        }
       
    
    }
//   console.log(x);
   let sum=0;
   for(let a=1;a<=x.length-1;a++){
        sum=sum+(x[a-1]*x[a])
   }
   
 
   return sum
};