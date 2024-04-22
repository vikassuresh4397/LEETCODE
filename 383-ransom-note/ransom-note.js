/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(arr, brr) {
    let max=0,obj={}
  for(let a=0;a<=brr.length-1;a++){
      if(obj[brr[a]]==undefined){
          obj[brr[a]]=1
      }else{
          obj[brr[a]]++
      }
  }
    
    // console.log(obj,"obj1")
   for(let a=0;a<=arr.length-1;a++){
       if(obj[arr[a]]==undefined){
          return false
       }else{
           obj[arr[a]]--
       }
   } 
    // console.log(obj,"obj2")
    for(let key in obj){
        if(obj[key]<0){
            return false
        }
    }
    
    
    return true
    
    
    
};