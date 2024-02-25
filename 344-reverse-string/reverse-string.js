/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(arr) {
    // let f=0,l=arr.length-1;
    // console.log(arr)
    
    if(arr.length%2==1){
            for(let a=0;a<=Math.floor(arr.length/2);a++){
        let temp=arr[a];
        arr[a]=arr[arr.length-1-a];
        arr[arr.length-1-a]=temp
    }
    
    return arr
    }else{
        for(let a=0;a<=Math.floor(arr.length/2)-1;a++){
        let temp=arr[a];
        arr[a]=arr[arr.length-1-a];
        arr[arr.length-1-a]=temp
    }
    
    return arr
    }

};