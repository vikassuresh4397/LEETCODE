/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            return arr[a]
        }
    }
};