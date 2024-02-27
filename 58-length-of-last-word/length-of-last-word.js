/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(arr) {
    let str="",brr=[];
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]==" "){
            if(str.length>=1){
                //  console.log(str,"dvbadsb")
                 brr.push(str) ;
                //  console.log("brr",brr)
            }
          
            str=""
            continue;
        }else{
            str=str+arr[a];
            if(a==arr.length-1){
                 brr.push(str);
            }
            
            
        }
    }
    
    let x=brr[brr.length-1];
    //  console.log("x",x,x.length)
    
    return x.length
};