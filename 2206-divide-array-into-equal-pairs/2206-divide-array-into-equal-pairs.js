/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
                obj[arr[a]]++;
            }
    }
    
    for(let key in obj){
        if(obj[key]%2!=0){
            return false
        }
    }
    
    return true
};