/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(arr, k) {
   let brr=[];
   for(let b=0;b<=arr.length-1;b++){
        if (arr[b] !== "a" && arr[b] !== "e" && arr[b] !== "i" && arr[b] !== "o" && arr[b] !== "u") {
    brr.push(0)
}else{
    brr.push(1)
}
   }
//   console.log(brr);
   let sum=0;
   for(let a=0;a<=k-1;a++){
       sum=sum+brr[a]
   }
//   console.log(sum);
   let crr=[];
   crr.push(sum)
  let a=1;
  while(a+k-1<arr.length){
      sum=sum-brr[a-1]+brr[a+k-1]
      crr.push(sum);
      a++
      
  }
  crr.sort(function(a,b){
     return b-a
  })
   return crr[0]
};