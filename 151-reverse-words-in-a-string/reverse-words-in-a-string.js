/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str="";
     let brr=s.split(" "),arr=[];
    
     for(let a=0;a<=brr.length-1;a++){
         if(brr[a]!==""){
             arr.push(brr[a])
         }
     }
     for(let a=0;a<=arr.length-1;a++){
       if(a==arr.length-1){
         str=str+arr[arr.length-1-a]
       }else{
          str=str+arr[arr.length-1-a]+" "
       }
      
     }
     
     return str
};