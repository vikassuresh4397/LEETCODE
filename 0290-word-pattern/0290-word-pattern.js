/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(arr, str) {
    let brr=str.split(" ");
    // console.log(brr);
    
    if(arr.length!==brr.length){
        return false
    }
    
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=brr[a]
        }else{
            if(obj[arr[a]]==brr[a]){
                continue;
            }else{
                return false
            }
        }
    }
    // console.log(obj)
    let crr=[];
    for(let key in obj){
        crr.push([obj[key],key])
    }
    // console.log(crr)
    let obj1={};
   for (let a = 0; a < crr.length; a++) {
    if (!obj1.hasOwnProperty(crr[a][0])) {
        obj1[crr[a][0]] = crr[a][1];
    }else{
        if(obj1[crr[a][0]]==crr[a][1]){
            continue
        }else{
            return false
        }
        
    }
}
// console.log(obj1);
    //  console.log(obj1)
    
    return true
    
   

    
};