/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(arr) {
    let count=0;
    for(let a=0;a<=arr.length-1;a++){
        for(let b=a+1;b<=arr.length-1;b++){
            for(let c=b+1;c<=arr.length-1;c++){
                for(let d=c+1;d<=arr.length-1;d++){
                    if(arr[a]+arr[b]+arr[c]==arr[d]){
                        count++
                    }
                }
            }
        }
    }
    
    return count
};