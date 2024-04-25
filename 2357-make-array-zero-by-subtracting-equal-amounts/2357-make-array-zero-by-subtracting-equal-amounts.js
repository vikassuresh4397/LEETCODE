/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(arr) {
    let count=0;
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]==0){
            count++
        }
    }
    if(count==arr.length){
        return 0
    }
    
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined && arr[a]!==0){
            obj[arr[a]]=1
        }
    }
    
    let bount=0;
    
    for(let key in obj){
        bount++
    }
    
    return bount
};