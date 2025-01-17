/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(arr, key) {
    let crr=[]
 for(let a=0;a<=arr.length-1;a++){
     if(arr[a]==key && a!==arr.length-1){
         crr.push(arr[a+1])
     }
 }
//  console.log(crr)
 let obj={};
 for(let a=0;a<=crr.length-1;a++){
     if(obj[crr[a]]==undefined){
         obj[crr[a]]=1
     }else{
         obj[crr[a]]++
     }
 }
//  console.log(obj);
 
 let max=0,val;
 for(let key in obj){
     if(max<=obj[key]){
        //  console.log("yes",key,obj[key])
         max=obj[key]
         val=key
     }
 }
 return +val
 
};