/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(arr) {
    let brr=[],obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]==0||arr[a]==1||arr[a]==2||arr[a]==3||arr[a]==4||arr[a]==5||arr[a]==6||arr[a]==7||arr[a]==8||arr[a]==9){
            brr.push(arr[a])
        }
    }
    
    if(brr.length<=1){
        return -1
    }
    // console.log("bee",brr)
    for(let a=0;a<=brr.length-1;a++){
        if(obj[brr[a]]==undefined){
            obj[brr[a]]=1
        }
    }
    
    let crr=[];
    for(let key in obj){
        crr.push(key)
    }
    
    crr.sort(function(a,b){
        return a-b
    });
    
    if(crr.length==1){
        return -1
    }
    
    return crr[crr.length-2]
};