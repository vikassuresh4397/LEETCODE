/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n==0){
        return 0
    }else if(n==1||n==2){
        return 1
    }else{
        let arr=[0,1,1],sum=1;

        for(let a=3;a<=n;a++){
          
           sum=arr[arr.length-1]+arr[arr.length-2]+arr[arr.length-3];
           arr.push(sum)
        }

        return sum
    }
};