/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(arr) {
    let stack=[];

    for(let a=0;a<=arr.length-1;a++){
   
    if(stack.length==0){
     stack.push(arr[a]);
    }
    else if(arr[a]=="("||arr[a]=="{"||arr[a]=="["){
        stack.push(arr[a]); 
    }
    else if(arr[a]==")"||arr[a]=="}"||arr[a]=="]"){
               if(stack[stack.length-1]=="("&&arr[a]==")"){
             stack.pop()
         }else if(stack[stack.length-1]=="["&&arr[a]=="]"){
             stack.pop()
         }else if(stack[stack.length-1]=="{"&&arr[a]=="}"){
             stack.pop()
         }else{
             return false
         }
    }
    }

    if(stack.length==0){
        return true
    }else{
        return false
    }
};