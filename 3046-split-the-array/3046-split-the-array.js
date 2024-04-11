/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
    
    for(let key in obj){
        if(obj[key]>=3){
            return false
        }
    }
    
    return true
};