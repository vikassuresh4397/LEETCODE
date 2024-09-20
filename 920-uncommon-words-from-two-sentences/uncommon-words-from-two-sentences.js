/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(arr1, arr2) {
    arr1=arr1.split(" ");
     arr2=arr2.split(" ")
    let obj={};
    
    for(let a=0;a<=arr1.length-1;a++){
        if(obj[arr1[a]]==undefined){
            obj[arr1[a]]=1
        }else{
            obj[arr1[a]]++
        }
    }
    
    for(let a=0;a<=arr2.length-1;a++){
         if(obj[arr2[a]]==undefined){
            obj[arr2[a]]=1
        }else{
            obj[arr2[a]]++
        }
    }
   let crr=[] 
    for(let key in obj){
        if(obj[key]==1){
            crr.push(key)
        }
    }
    return crr
    
};