/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(arr) {
   let r=arr.length;
   let c=arr[0].length;
   
   let nr=[],nc=[];
   for(let a=0;a<=r-1;a++){
       for(let b=0;b<=c-1;b++){
          if(arr[a][b]==0){
              nr.push(a);
              nc.push(b);
          }
       }
   }
//   console.log(arr)
   for(let a=0;a<=nr.length-1;a++){
       for(let b=0;b<=c-1;b++){
           arr[nr[a]][b]=0
       }
   }
    // console.log(arr)
   for(let b=0;b<=nc.length-1;b++){
       for(let a=0;a<=r-1;a++){
           arr[a][nc[b]]=0
       }
   }
   
//      console.log(arr)
//   console.log(nr,nc)
   return arr
};