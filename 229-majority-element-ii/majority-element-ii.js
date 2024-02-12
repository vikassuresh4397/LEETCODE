/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
   let brr=[], x=arr.length/3;
    for(let key in obj){
         if(obj[key]>x){
             brr.push(key)
         }
    }
    return brr
};