/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(arr) {
    // console.log(arr.length);
    if(arr.length==0){
        return 0
    }
    if(arr.length==1){
        // console.log("dsfwes")
         if(arr[0]==""){
            //  console.log("dsfwes")
             return 0
         }
    }
    let count=0,bount=0;
    if(arr.length==0||arr.length==1){
        if(arr[0]==""||arr[0]==" "){
            return 0
        }
    }
// console.log(arr)
    arr=arr+" ";
    // console.log(arr);
    for(let a=1;a<=arr.length-1;a++){
        if(arr[a]==" " && arr[a-1]!==" "){
            count++
        }
    }
    return count
};