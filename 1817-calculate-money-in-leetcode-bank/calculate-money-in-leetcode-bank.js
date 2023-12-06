/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let arr=[],sum=0,count=0;
    for(let a=0;a<=n-1;a++){
        if((sum!=0 && a%7==0)){
            sum=arr[a-7]+1;
            arr.push(sum);
            count=count+sum;
        }else{
            sum=sum+1;
            arr.push(sum);
             count=count+sum;
        }
     

    }
// let count=0
//     for(let a=0;a<=arr.length-1;a++){
//         count=count+arr[a]
//     }

    return count
};