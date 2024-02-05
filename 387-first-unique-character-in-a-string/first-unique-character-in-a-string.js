/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(arr) {
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
            if(obj[key]==1){
                brr.push(key)
            }
        }
    
     for(let a=0;a<=arr.length-1;a++){
         for(let b=0;b<=brr.length-1;b++){
             if(arr[a]==brr[b]){
                 return a;
             }
         }
     }
    
    return -1
    
};