/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(arr, brr) {
     let a=0,stack=[];
    
    while(a<=arr.length-1){
        if(stack.length==0 && arr[a]!="#"){
            stack.push(arr[a]);
            a++;
        }else if(arr[a]=="#"){
            stack.pop();
            a++
        }else{
            stack.push(arr[a]);
            a++; 
        }
    }
    let x=stack.join("");
    a=0;
     let stack1=[];
    
    while(a<=brr.length-1){
        if(stack1.length==0 && brr[a]!="#"){
            stack1.push(brr[a]);
            a++;
        }else if(brr[a]=="#"){
            stack1.pop();
            a++
        }else{
            stack1.push(brr[a]);
            a++; 
        }
    }
     let y=stack1.join("");
    
    let count=0;
    if(x.length!=y.length){
        return false
    }
    for(let a=0;a<=x.length-1;a++){
        if(x[a]==y[a]){
            count++;
        }
    }
    if(count==x.length&&count==y.length){
        return true
    }
    
    return false;
    
};