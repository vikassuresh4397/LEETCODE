/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(brr, arr) {
 let obj={};

 for(let a=0;a<=arr.length-1;a++){
  if(obj[arr[a]]==undefined){
      obj[arr[a]]=1
  }else{
      obj[arr[a]]++;
  }
 }

 let count=0;

 for(let a=0;a<=brr.length-1;a++){
  if(obj[brr[a]]==undefined){
     count++;
  }else{
      obj[brr[a]]--;
  }
 }

 for(let key in obj){
     if(obj[key]<0){
         let x=obj[key]*(-1);
         count=count+x
     }
 }

 return count

};