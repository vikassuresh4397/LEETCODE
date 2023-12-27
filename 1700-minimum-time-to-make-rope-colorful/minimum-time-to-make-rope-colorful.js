/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let arr=[];

    for(let a=colors.length-1;a>=0;a--){
         arr.push([colors[a],neededTime[a]])
    }
    

    
    let stack=[],time=[];
    
    for(let a=0;a<=arr.length-1;a++){
        if(stack.length==0){
            stack.push(arr[a]);
           
        }else if(stack[stack.length-1][0]==arr[a][0]){
           if(stack[stack.length-1][1]>=arr[a][1]){
               time.push(arr[a][1])
           }else if(stack[stack.length-1][1]<arr[a][1]){
              
               time.push(stack[stack.length-1][1]);
                stack.pop()
               stack.push(arr[a])
           }
        }else{
             stack.push(arr[a]);
            
        }
    };
    let sum=0;
//   console.log(time)
    for(let a=0;a<=time.length-1;a++){
        sum=sum+time[a]
    }
    
    return sum
};