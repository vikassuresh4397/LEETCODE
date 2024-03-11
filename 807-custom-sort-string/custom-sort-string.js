/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(arr1, arr2) {
  let obj={};
  for(let a=0;a<=arr1.length-1;a++){
      if(obj[arr1[a]]==undefined){
          obj[arr1[a]]=1
      }
  }
  
//   console.log(obj);
  let obj2={};
  
  for(let key in obj){
      if(obj2[key]==undefined){
          obj2[key]=0
      }
  }
  
//   console.log(obj2);
  let grr=[]
  for(let a=0;a<=arr2.length-1;a++){
      if(arr1.includes(arr2[a])){
          obj2[arr2[a]]++;
      }else{
          grr.push(arr2[a])
      }
  }
//   console.log(obj2);
//   console.log(grr)
   grr.sort();
    //  console.log(grr);
     for(let a=0;a<=grr.length-1;a++){
         if(obj2[grr[a]]==undefined){
             obj2[grr[a]]=1
         }else{
             obj2[grr[a]]++;
         }
     }
    //  console.log(obj2);
     let sum="";
     for(let key in obj2){
         for(let a=0;a<=obj2[key]-1;a++){
             sum=sum+key
         }
     }
     
  return (sum)
   
    
    
};