/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(arr, k) {
    if(arr.length==k){
       let obj1={};
       for(let a=0;a<=arr.length-1;a++){
           if(obj1[arr[a]]==undefined){
               obj1[arr[a]]=1
           }else{
               obj1[arr[a]]++
           }
       }
       let maxi=0;
       for(let key in obj1){
           if(maxi<key){
               maxi=+key
           }
       }
       return +maxi
    }
    
    let crr=[]
    for (let a = 0; a < arr.length; a++) {
        let sum=[]
        for (let b = a; b < arr.length; b++) {
           sum.push(arr[b])
           
            // console.log(sum);
            
            let g=0
            if(sum.length==k){
                 crr.push(sum);
                 g++
                break;
              
            }
            if(g==1){
                break;
            }
            
        }
    }
    console.log("crr",crr);
    
   let prr = crr.flat();
    
     console.log(prr);
    let obj={};
    for(let a=0;a<=prr.length-1;a++){
        if(obj[prr[a]]==undefined){
            obj[prr[a]]=1
        }else{
            obj[prr[a]]++
        }
    }
    
    console.log(obj);
    let max=0,wow=0;
    for(let key in obj){
        if(obj[key]==1 && max<=key){
            max=+key;
            console.log("max1",max)
            wow++
        }
    }
    console.log("max",max)
    if(wow==0){
        return -1
    }
    return (+max)
    
    
};