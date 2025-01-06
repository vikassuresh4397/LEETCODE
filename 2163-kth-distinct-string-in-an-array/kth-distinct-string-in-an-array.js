/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, m) {
 let obj={};
 for(let a=0;a<=arr.length-1;a++){
     if(obj[arr[a]]==undefined){
         obj[arr[a]]=[a]
     }else{
         obj[arr[a]].push(a)
     }
 }
//  console.log(obj)
 let crr=[],k=0;
 for(let key in obj){
     if(obj[key].length==1){
         crr.push([obj[key][0],key]);
         k++
     }
 }
 
 if(k<m){
     return ""
 }
 
 console.log(crr);
 crr.sort(function(a,b){
     return a[0]-b[0]
 })
//   console.log(crr);
  
  return crr[m-1][1]
  
  
};