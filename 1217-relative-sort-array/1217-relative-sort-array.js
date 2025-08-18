/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
   let obj={};
   for(let a=0;a<=arr1.length-1;a++){
       if(obj[arr1[a]]==undefined){
           obj[arr1[a]]=1
       }else{
           obj[arr1[a]]++
       }
   }
   console.log(obj);
   let crr=[]
   for(let a=0;a<=arr2.length-1;a++){
       if(obj[arr2[a]]!==undefined){
           crr.push([arr2[a],obj[arr2[a]]])
       }else{
           crr.push([arr2[a],0])
       }
   }
   console.log(crr);
   
   
   
   let drr=[],nrr=[];
   for(let a=0;a<=crr.length-1;a++){
       for(let b=0;b<=crr[a][1]-1;b++){
        //   console.log(crr[a][0])
           drr.push(crr[a][0])
       }
   };
   let obj2={};
   for(let a=0;a<=arr2.length-1;a++){
       if(obj2[arr2[a]]==undefined){
           obj2[arr2[a]]=1
       }
   }
   console.log("obj2",obj2);
   
   for(let a=0;a<=arr1.length-1;a++){
       if(obj2[arr1[a]]==undefined){
           nrr.push(arr1[a])
       }
   }
   console.log(nrr)
//   let combined
nrr=nrr.sort(function(a,b){
       return a-b
   })
  return ([...drr,...nrr])
};
