/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(arr) {
    let obj={1:[0]};
    let count=0;
    // let brr=[];
    
   for(let a=0;a<=arr.length-1;a++){
       if(arr[a]==1){
           count++;
           obj[arr[a]].push(count)
       }else{
           count=0;
       }
   }
    
    let brr;
    
    for(let key in obj){
        brr=obj[key]
    }
    
    brr.sort(function(a,b){
        return b-a
    })
    
    return brr[0]
    
    
};