/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(arr, target) {
    let count=0;
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]>=target){
            count++;
        }
    }
    return count
};