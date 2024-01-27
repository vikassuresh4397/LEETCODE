/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let max=-Infinity,pos=0;
   for(let a=0;a<=arr.length-1;a++){
       if(max<arr[a]){
           max=arr[a];
           pos=a;
       }
   }
   
   if(pos==0||pos==arr.length-1){
       return false
   }
    let count=0;
    for(a=0;a<pos;a++){
       if(arr[a]<arr[a+1]){
           count++
       }else{
           return false
       }
    }
    
    for(let a=pos;a<=arr.length-2;a++){
        if(arr[a]>arr[a+1]){
            count++
        }else{
           return false
       }
    }
    // console.log(count)
    return true
    
    
};