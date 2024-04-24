/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr=[0,1,1];
    let sum=0
    for(let a=2;a<n;a++){
        sum=0
       sum=sum+arr[arr.length-1]+arr[arr.length-2];
        arr.push(sum)
    }
    //  console.log(arr)
    if(n==0){
        return arr[0]
    }
  if(n==1){
        return arr[n]
    }else if(n==2){
        return arr[2]
    }else if(n==3){
        return arr[3]
    }else{
        return arr[arr.length-1]
    }
};