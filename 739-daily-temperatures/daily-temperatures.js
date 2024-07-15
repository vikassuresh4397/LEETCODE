/**
 * @param {number[]} temperatures
 * @return {number[]}
 */


var dailyTemperatures = function(arr) {
 
  let stack=[],grr=[],a=arr.length-1,count=0;
  while(a>=0){
    if(stack.length==0){
       stack.push([arr[a],a]);
       a--;
       count=0;
       grr.push(count);
       count=0;
    }else if(arr[a]>=stack[stack.length-1][0]){
      stack.pop();
      
    }else if(arr[a]<stack[stack.length-1][0]){
      stack.push([arr[a],a]);
       a--;
      
       grr.push(stack[stack.length-2][1]-stack[stack.length-1][1]);
       count=0;
    }
  }
  let str=[]
  for(let a=0;a<=grr.length-1;a++){
    str.push(grr[grr.length-1-a])
  }
  // console.log(stack)
  return str


};