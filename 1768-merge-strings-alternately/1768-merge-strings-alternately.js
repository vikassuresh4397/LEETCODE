/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(arr1, arr2) {
    if(arr1.length>arr2.length){
        let merge=""
        for(let a=0;a<=arr1.length-1;a++){
            if(arr2[a]==undefined){
                 merge=merge+arr1[a]
            }else{
                 merge=merge+arr1[a]+arr2[a]
            }
           
        }
        
        return merge
    }else if(arr1.length<arr2.length){
         let merge=""
        for(let a=0;a<=arr2.length-1;a++){
            if(arr1[a]==undefined){
                 merge=merge+arr2[a]
            }else{
               merge=merge+arr1[a]+arr2[a]
            }
            
        }
        return merge
    }else{
         let merge=""
        for(let a=0;a<=arr2.length-1;a++){
             merge=merge+arr1[a]+arr2[a]
        }
        return merge
    }
};