/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(arr) {
  arr=arr+""
  let brr=[]
    for(let a=0;a<=arr.length-1;a++){
      brr.push(+arr[a])
    }
    
   
   brr.sort(function(a,b){
     return a-b
   });
   
  // console.log(brr)
   let crr=[]
   for(let a=0;a<=1;a++){
     let x=brr[a]+""
     x=x+brr[brr.length-1-a]+"";
     crr.push(+x)
   }
    // console.log(crr)
   let sum=0
   for(let a=0;a<=crr.length-1;a++){
      sum=sum+crr[a]
    }
    
    return sum
   
   
};