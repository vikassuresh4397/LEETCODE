/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(arr) {
    let stack=[],a=0;
    let brr=[];
    for(let a=0;a<=arr.length-1;a++){
        // console.log(arr[a][arr[a].length-2])
        if(arr[a][arr[a].length-2]=="."){
            if(arr[a][arr[a].length-3]=="."){
                brr.push("p")
            }else{
                brr.push("n")
            }
        }else{
            brr.push("g")
        }
    }
    // console.log(brr);
    while(a<=arr.length-1){
        if(stack.length==0){
            if(brr[a]=="p"||brr[a]=="n"){
                a++
                continue
            }else{
                a++
                stack.push("1")
            }
        }else if(brr[a]=="p"){
            stack.pop();
            a++
        }else if(brr[a]=="n"){
            a++
            continue;
        }else if(brr[a]=="g"){
            stack.push("1")
            a++
        }
    }
    
    return stack.length
};