/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(arr1, arr2) {
    let min=+Infinity;
    let obj={};
    
    for(let a=0;a<=arr1.length-1;a++){
        if(obj[arr1[a]]==undefined){
            obj[arr1[a]]=1
        }else{
            obj[arr1[a]]++
        }
    }
    let count=0
     for(let a=0;a<=arr2.length-1;a++){
          if(obj[arr2[a]]==undefined){
              continue;
          }
         else{
             if(obj[arr2[a]]==0){
                 continue;
             }else{
                 obj[arr2[a]]--;
                 count++;
                 if(min>arr2[a]){
                     min=arr2[a]
                 }
             }
         }
     }
    
    if(min==+Infinity){
        return -1
    }
    
    return min
    
};