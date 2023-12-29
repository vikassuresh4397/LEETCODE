/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(arr) {
    arr.sort(function(a,b){
        return a-b
    });
 let count=[];

 for(let c=arr.length-1;c>=0;c--){
     let b=c-1;
     let a=0;
     while(b>a && c>b){
         if(arr[a]+arr[b]>arr[c]){
             count.push(b-a);
             b--;
             a=0
         }else{
             a++
         }
     }
 }

let sum=0;
 for(let a=0;a<=count.length-1;a++){
     sum=sum+count[a]
 }
 return sum
};