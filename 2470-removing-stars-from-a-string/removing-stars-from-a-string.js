/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(arr) {
    let a=0,stack=[];
    
    while(a<=arr.length-1){
        if(stack.length==0){
            stack.push(arr[a]);
            a++;
        }else if(arr[a]=="*"){
            stack.pop();
            a++
        }else{
            stack.push(arr[a]);
            a++; 
        }
    }
    
    return stack.join("")
};