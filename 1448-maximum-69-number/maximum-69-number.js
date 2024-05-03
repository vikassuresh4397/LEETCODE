/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num=num+""
    let brr=[],count=0;
    for(let a=0;a<=num.length-1;a++){
        if(num[a]==6 && count==0){
          brr.push(9)
        //   console.log("yes")
            count++
        }else{
            brr.push(num[a])
        }
    }
    return(brr.join(""))
};