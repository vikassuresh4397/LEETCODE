/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(arr) {
    let stack=[]
    for(let a=0;a<=arr.length-1;a++){
        if(stack.length==0||!isNaN(+arr[a])){
            stack.push(+arr[a])
            // console.log(arr[a],"YES")
        }
        else if(isNaN(+arr[a])){
        //   console.log(arr[a],"NO");
          if(arr[a]=="+"){
              let x=stack[stack.length-2];
               let y=stack[stack.length-1];
               let z=x+y;
               stack.pop();
               stack.pop();
              // console.log("z",z);
               stack.push(Math.floor(z));
               // console.log("stack",stack)
          }else  if(arr[a]=="-"){
              let x=stack[stack.length-2];
               let y=stack[stack.length-1];
               let z=x-y;
               stack.pop();
               stack.pop();
               // console.log("z",z);
               stack.push(Math.floor(z));
               // console.log("stack",stack)
          }else if (arr[a] == "/") {
                let x=stack[stack.length-2];
               let y=stack[stack.length-1];
               // let z=x*y;
               stack.pop();
               stack.pop();
    stack.push(parseInt(x/y)); 
}else  if(arr[a]=="*"){
              let x=stack[stack.length-2];
               let y=stack[stack.length-1];
               let z=x*y;
               stack.pop();
               stack.pop();
            //   console.log("z",z);
                stack.push(Math.floor(z));
                // console.log("stack",stack)
          }
           
        }
    }
    
   return stack[stack.length-1]
};