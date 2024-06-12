/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    }
    let brr=[]
    for(let key in obj){
        if(obj[key]>1){
            for(let a=0;a<=obj[key]-1;a++){
                brr.push(+key)
            }
        }else{
             brr.push(+key)
              }
    }
    
    for(let a=0;a<=brr.length-1;a++){
        arr[a]=brr[a]
    }
    
    return arr
};