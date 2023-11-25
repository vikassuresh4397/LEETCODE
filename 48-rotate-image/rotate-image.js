/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(arr) {
let row=arr.length;
let col=arr[0].length;
let brr=arr
let grr=[]
for(let a=0;a<=row-1;a++){
     sum=[];
    for(let b=0;b<=col-1;b++){
    //  sum=sum+arr[col-1-b][a];
     sum.push(brr[col-1-b][a])
    }
    grr.push(sum)
    // console.log(sum)
}


for(let a=0;a<=arr.length-1;a++){
    for(let b=0;b<=col-1;b++){
        arr[a][b]=grr[a][b]
    }
}

return arr
};