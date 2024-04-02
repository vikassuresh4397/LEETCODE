/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    }
    let count=0
    for(let key in obj){
       count++;
    }
    
    if(count==26){
         return true
    }else{
        return false
    }
   
};