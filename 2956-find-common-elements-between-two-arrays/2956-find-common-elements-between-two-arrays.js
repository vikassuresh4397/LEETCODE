/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(arr, arr2) {
    let obj1={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj1[arr[a]]==undefined){
            obj1[arr[a]]=1
        }else{
            obj1[arr[a]]++
        }
    }
    
   
    
      let obj2={};
    for(let a=0;a<=arr2.length-1;a++){
        if(obj2[arr2[a]]==undefined){
            obj2[arr2[a]]=1
        }else{
            obj2[arr2[a]]++
        }
    }
    
    
    
   let obj3={};
   for(let a=0;a<=arr.length-1;a++){
        if(obj3[arr[a]]==undefined){
            obj3[arr[a]]=[1]
        }
    }
    
   
    for(let a=0;a<=arr2.length-1;a++){
        if(obj3[arr2[a]]!==undefined){
            obj3[arr2[a]].push(1)
        }
    }
   
    let common=[]
    for(let key in obj3){
        if(obj3[key].length>=2){
            common.push(key)
        }
    }
    
  
    let first=0,second=0;
    for(let a=0;a<=common.length-1;a++){
        for(let key in obj1){
            if(key==common[a]){
                first=first+obj1[key]
            }
        }
        for(let key in obj2){
            if(key==common[a]){
                second=second+obj2[key]
            }
        }
    }
    
    return [first,second]
};