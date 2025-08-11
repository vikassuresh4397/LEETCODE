/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let arr=n.toString(2)+"";
    let obj={};
    console.log(arr);
    for(let a=0;a<=arr.length-1;a++){
      if(obj[arr[a]]==undefined){
        obj[arr[a]]=1;
      }else{
        obj[arr[a]]++
      }
    }
    
    let sum=0;
    for(let key in obj){
      if(key==1){
        sum=obj[key]
      }
    }
    console.log(obj)
    return +sum
};