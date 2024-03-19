/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(arr) {
    let obj={};
    
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    }
    
    let count=0,brr=[];
    for(let key in obj){
        count++;
        brr.push([key,obj[key]])
    }
    
    brr.sort(function(a,b){
        return a[1]-b[1]
    });
    
    let totalAttempts=arr.length/2;
    
    if(count>=totalAttempts){
        return totalAttempts
    }else{
        return count;
    }
};