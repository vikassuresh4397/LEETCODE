/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(arr) {
    let stack=[],a=0;
    while(a<=arr.length-1){
        if(stack.length==0){
            stack.push(arr[a]);
            a++
        }
        if(stack[stack.length-1]==arr[a]){
            stack.pop();
            a++
        }else{
           stack.push(arr[a]);
            a++ 
        }
    }
    
    return stack.join("")
};