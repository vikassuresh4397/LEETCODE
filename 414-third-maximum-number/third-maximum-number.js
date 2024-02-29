/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(arr) {
arr.sort(function(a,b){
    return a-b
});
    
    if(arr.length==1){
        return arr[0]
    }else if(arr.length==2){
        return arr[1]
    };
    
    let obj={};
    
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }
    };
    let brr=[]
    for(let key in obj){
        brr.push(key)
    }
    
    brr.sort(function(a,b){
        return a-b
    });
    
    if(brr.length==1){
        return brr[0]
    }else if(brr.length==2){
        return brr[1]
    }
    
    return brr[brr.length-1-2]
};