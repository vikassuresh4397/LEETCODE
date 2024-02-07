/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(arr) {
     let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    }
    // console.log("ob",obj);
    let count=0,rest=0;
    for(let key in obj){
        if(obj[key]%2==0){
            count=count+obj[key]/2;
        }else{
            let x=obj[key]-1;
            count=count+x/2;
            rest++;
        }
    }
    
    return [count,rest]
};