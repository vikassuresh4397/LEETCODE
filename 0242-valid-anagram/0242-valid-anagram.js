/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(arr1, arr2) {
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
            return false;
        }else{
            obj[arr2[a]]--
        }
}

for(let key in obj){
    if(obj[key]>0||obj[key]<0){
        return false
    }
}

return true

};