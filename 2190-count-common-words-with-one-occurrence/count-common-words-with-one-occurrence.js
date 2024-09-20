/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(arr1,arr2) {
    let obj1={};
    for(let a=0;a<=arr1.length-1;a++){
        if(obj1[arr1[a]]==undefined){
            obj1[arr1[a]]=1
        }else{ 
          obj1[arr1[a]]=+Infinity;
        }
    }
    //   console.log(obj1)
     for(let a=0;a<=arr2.length-1;a++){
         if(obj1[arr2[a]]==undefined){
            continue;
         }else{
             if(obj1[arr2[a]]==0){
                 obj1[arr2[a]]=0
             }else{
                   obj1[arr2[a]]++;
             }
            
         }
     }
    //  console.log(obj1)
    let count=0
    for(let key in obj1){
        if(obj1[key]==2){
            count++
        }
    }
    return count
   

};