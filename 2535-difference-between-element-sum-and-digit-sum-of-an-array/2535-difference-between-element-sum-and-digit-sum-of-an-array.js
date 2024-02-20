/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(arr) {
    let obj={};
    let str="";
    let e=0
    for(let a=0;a<=arr.length-1;a++){
        str=str+arr[a];
        e=e+arr[a]
    }
    
    for(let a=0;a<=str.length-1;a++){
        if(obj[str[a]]==undefined){
            obj[str[a]]=1;
        }else{
            obj[str[a]]++;
        }
    }
    let d=0;
    for(let key in obj){
        let x=key*obj[key];
        d=d+x
    }
    
    return Math.abs(d-e)
    
    
};