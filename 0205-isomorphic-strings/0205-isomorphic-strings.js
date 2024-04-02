/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(arr, brr) {
    let obj={};
  let mount=0;
  
    for(let a=0;a<=arr.length-1;a++){
      if((obj[arr[a]]==undefined)  
      || obj[arr[a]]==brr[a]){
        obj[arr[a]]=brr[a];
      }else{
        return false
      }
    }

let crr={}
  for(let key in obj){
    if(crr[obj[key]]==undefined){
      crr[obj[key]]=1;
    }else{
      return false
    }
  }



    return true
};