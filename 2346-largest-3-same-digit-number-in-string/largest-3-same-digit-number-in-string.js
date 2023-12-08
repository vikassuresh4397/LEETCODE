/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(arr) {
    let num=[];
    for(let a=0;a<=arr.length-1;a++){
      if(arr[a]==arr[a+1]&&arr[a+1]==arr[a+2]){
          a++;
          a++;
         num.push(arr[a])
      }
    }
    let max=0;
    for(let a=0;a<=num.length-1;a++){
       if(max<num[a]){
           max=num[a]
       } 
    }
    let sum=""
    for(let a=0;a<=2;a++){
        sum=sum+max
    }
    
    if(num.length==0){
        return ""
    }else{
        return sum
    }
};