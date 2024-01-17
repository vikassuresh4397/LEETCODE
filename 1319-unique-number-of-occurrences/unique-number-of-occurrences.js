/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj1={},obj2={},brr=[];

    for(let a=0;a<=arr.length-1;a++){
        if(obj1[arr[a]]==undefined){
            obj1[arr[a]]=1
        }else{
            obj1[arr[a]]++
        }
    }

    for(let key in obj1){
      brr.push(obj1[key])
    }

    for(let a=0;a<=brr.length-1;a++){
         if(obj2[brr[a]]==undefined){
            obj2[brr[a]]=1
        }else{
            return false
        }
    }

    return true
};