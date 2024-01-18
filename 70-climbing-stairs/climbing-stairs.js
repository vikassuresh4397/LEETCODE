/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let sum=0;
    if(n==1){
        return 1;
    };

  
    let arr=[1,1];

    for(let a=2;a<=n-1;a++){
        sum=0
       sum=sum+arr[a-1]+arr[a-2];
       arr.push(sum);
    //   console.log("sum",arr[a-1],arr[a-2])
    };
   let bum=0;
    for(let a=arr.length-2;a<=arr.length-1;a++){
        bum=bum+arr[a]
    }
// console.log(arr)
    return bum
};