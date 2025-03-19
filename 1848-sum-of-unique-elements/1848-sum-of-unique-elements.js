/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
     
     let brr=[];
     for(let key in obj){
        if(obj[key]==1){
          brr.push(+key)
        }
       
     }

     let sum=0;
     for(let a=0;a<=brr.length-1;a++){
        sum=sum+brr[a]
     }

     return +sum

};