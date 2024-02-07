/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(arr, k) {
     let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    } ;
    // console.log(obj)
    let crr=[]
   for(let key in obj){
       crr.push([key,obj[key]])
   }
   
   crr.sort(function(a,b){
       return b[1]-a[1]
   })
   
    
//   console.log(crr);
   
   let grr=[];
   for(let a=0;a<k;a++){
      grr.push(+crr[a][0]) 
   }
   return grr
};