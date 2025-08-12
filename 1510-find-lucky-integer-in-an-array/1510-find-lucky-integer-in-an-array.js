/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
   let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
   let brr=[]
    for(let key in obj){
        if(+obj[key]==+key){
          brr.push(+key)
        }
    }
console.log(brr)
    brr.sort(function(a,b){
        return b-a
    });
    console.log(brr);
    let x=+brr[0];

    if(brr.length==0){
        return -1
    }
    return x
};