/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let arr='abcdefghijklmnopqrstuvwxyz';
    // console.log(arr[25]);
    let gum=""
    for(let a=0;a<=s.length-1;a++){
        // let A=s[a]
        let index = arr.indexOf(s[a])+1;
        // console.log(index)
        gum=gum+index
    }
    
    let sum=0;
    for(let a=0;a<=gum.length-1;a++){
        sum=sum+Number(gum[a])
    }
    //  console.log(sum,"sum");
     if(k==1){
         return sum
     }
    let a=2,rum=0
    while(a<=k){
        rum=0
        let x=""+sum;
    //   console.log(x,"x")
        for(let a=0;a<=x.length-1;a++){
            rum=rum+Number(x[a]);
            // console.log(rum,"rum")
        }
        sum=rum;
        a++;
    }
    // console.log("gsegwh")
    return rum
    
};