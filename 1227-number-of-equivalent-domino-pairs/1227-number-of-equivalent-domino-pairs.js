/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(arr) {
    let obj={};
    
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a][0]>arr[a][1]){
            let temp = arr[a][0];
arr[a][0] = arr[a][1];
arr[a][1] = temp;
        }
    }
    console.log(arr)
    
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
          obj[arr[a]]=1 
        }else{
            obj[arr[a]]++;
        }
    }
    
    console.log(obj);
    let sum=0
    for(let key in obj){
        if(obj[key]>0){
            let x=obj[key]*(obj[key]-1)/2;
            sum=sum+x
        }
    }
    return sum
};