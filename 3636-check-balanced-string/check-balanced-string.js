/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(arr) {
    let odd=0,even=0;
    for(let a=0;a<=arr.length-1;a++){
        if(a%2==0){
            even=even+Number(arr[a])
        }else{
            odd=odd+Number(arr[a])
        }
    }
    console.log(even,odd)
    if(even==odd){
        return true
    }
    return false
};