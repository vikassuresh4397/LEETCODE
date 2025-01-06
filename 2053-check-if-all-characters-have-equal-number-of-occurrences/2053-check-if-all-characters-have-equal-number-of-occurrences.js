/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
    let crr=[];
    if(arr.length==0){
        return false
    }
    for(let key in obj){
        crr.push(obj[key])
    }

    for(let a=0;a<=crr.length-2;a++){
          if(crr[a]!==crr[a+1]){
            return false
          }
    }
    return true
};