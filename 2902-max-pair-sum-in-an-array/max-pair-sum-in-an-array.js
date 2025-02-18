/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(arr) {
   let crr=[],max=[];
   for(let a=0;a<=arr.length-1;a++){
       let brr=arr[a]+"";
       let mrr=[],maxi=0
       for(let b=0;b<=brr.length-1;b++){
           if(maxi<brr[b]){
               maxi=brr[b]
           }
           mrr.push(brr[b])
       }
       crr.push(mrr)
       max.push(maxi)
   }
//   console.log(crr,max);
   let obj={};
   
   for(let a=0;a<=max.length-1;a++){
       if(obj[max[a]]==undefined){
           obj[max[a]]=[arr[a]]
       }else{
           obj[max[a]].push(arr[a])
       }
   }
//   console.log(obj);
   let rum=[]
   for(let key in obj){
       obj[key]= obj[key].sort(function(a,b){
           return b-a
       })
       let sum=0;
       if(obj[key].length>=2){
            for(let a=0;a<=1;a++){
           sum=sum+obj[key][a]
       }
       rum.push(sum)
       }
      
   }
   
   if(rum.length==0){
       return -1
   }
//   console.log(rum)
   rum=rum.sort(function(a,b){
       return b-a
   });
    //   console.log(rum)
   return rum[0]
};