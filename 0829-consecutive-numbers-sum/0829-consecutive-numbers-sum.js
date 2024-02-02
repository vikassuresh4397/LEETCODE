/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
    let count = 0;
    let num = 1;

//     while (n > 0) {
//         if (n % num === 0) // If 'n' is divisible by 'num', we increment the count
//             count++;
//         n -= num; // decrement 'n' by 'num' to move to the next set of consecutive numbers
//         num++; // Increment 'num' to check for the next set of consecutive numbers
//     }

//     return count;
    
    while(n>0){
    if(n%num==0){
        count++
    }
    n=n-num;
    num++;
}
    return count
};