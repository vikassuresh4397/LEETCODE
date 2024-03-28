/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(arr) {
    let stack=[],count=0,a=0;
    while(a<=arr.length-1){
        if(arr[a]=='+'){
            if(stack.length==0){
                continue;
                a++
            }else if(stack.length==1){
                stack.push(+stack[stack.length-1]);
                a++
            }else{
                stack.push((+stack[stack.length-1])+(+stack[stack.length-2]))
                a++
            }
        }else if(arr[a]=='D'){
            if(stack.length==0){
                stack.push(0)
                a++
            }else{
                stack.push((+stack[stack.length-1])*2)
                a++
            }
            
        }else if(arr[a]=='C'){
            if(stack.length==0){
                a++
                continue;
                
            }else{
                stack.pop()
                a++
            }
        }else{
            stack.push(arr[a])
            a++
        }
    }
    
    for(let a=0;a<=stack.length-1;a++){
        count=(+stack[a])+count;
        
    }
    
    return count
};