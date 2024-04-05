/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(arr) {
    let stack=[],a=0;
    let small="abcdefghijklmnopqrstuvwxyz";
    let capil="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while(a<=arr.length-1){
        if(stack.length==0){
            stack.push(arr[a]);
            a++
        }else{
            if(small.includes(stack[stack.length-1]) && arr[a]==stack[stack.length-1].toUpperCase()){
                stack.pop();
                a++
            }else if(capil.includes(stack[stack.length-1]) && arr[a]==stack[stack.length-1].toLowerCase()){
                 stack.pop(); 
                a++
                     }else{
                 stack.push(arr[a]);
            a++
            }
        }
    }
    
    return stack.join("")
};