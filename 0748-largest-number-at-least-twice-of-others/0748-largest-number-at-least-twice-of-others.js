/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(arr) {
    let brr=[]
    for(let a=0;a<=arr.length-1;a++){
        brr.push(arr[a])
    }
    arr.sort(function(a,b){
        return b-a;
    });
    // console.log(arr,crr,brr)
    let x=arr[1]*2,y=arr[0],index;
    // console.log("x",x,"y",y)
    if(x<=y){
         for(let a=0;a<=arr.length-1;a++){
             
             if(brr[a]==y){
                 index=a;
             }
         }
         return index
    }else{
        return -1
    }
    
};