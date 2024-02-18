/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(arr) {
    let obj={};
    
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
    
    
    let max=1;
    for(let key in obj){
        if(max<obj[key]){
            max=obj[key]
        }
    }
    let count=0
    for(let key in obj){
        if(max==obj[key]){
            count++;
        }
    }
    
    let x=count*max;
    return x
};