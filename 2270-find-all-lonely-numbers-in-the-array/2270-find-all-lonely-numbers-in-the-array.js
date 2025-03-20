/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(arr) {
    arr.sort(function(a,b){
        return a-b
    });
    console.log(arr);
    let crr=[]
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]==arr[a+1]-1){
            crr.push([arr[a],1])
        }else if(arr[a]==arr[a-1]+1){
             crr.push([arr[a],1])
        }else if(arr[a]==arr[a-1]){
            crr.push([arr[a],1])
        }else if(arr[a]==arr[a+1]){
            crr.push([arr[a],1])
        }
        
        else{
            crr.push([arr[a]])
        }
    }
    let brr=[]
    for(let a=0;a<=crr.length-1;a++){
        if(crr[a].length==1){
            brr.push(+crr[a][0])
        }
    }
    return brr
};