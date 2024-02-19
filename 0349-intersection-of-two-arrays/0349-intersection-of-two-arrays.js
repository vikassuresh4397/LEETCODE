/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(arr1,arr2) {
    let obj={};
    
    for(let a=0;a<=arr1.length-1;a++){
        if(obj[arr1[a]]==undefined){
            obj[arr1[a]]=1
        }else{
            obj[arr1[a]]++;
        }
    }
    let brr=[]
      for(let a=0;a<=arr2.length-1;a++){
          if(obj[arr2[a]]==undefined){
           continue;
        }else{
            obj[arr2[a]]--;
            brr.push(arr2[a])
        }
      }
    
    let obj2={};
    for(let a=0;a<=brr.length-1;a++){
        if(obj2[brr[a]]==undefined){
            obj2[brr[a]]=1
        }
    }
    let crr=[]
    for(let key in obj2){
        crr.push(+key)
    }
    return crr
};