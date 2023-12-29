/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(arr) {
    arr.sort(function(a,b){
        return a-b
    });
    let count=[];
    for(let c=arr.length-1;c>=2;c--){
       let b=c-1;
       let a=0;
       while(a<b && b<c){
          if(arr[b]+arr[a]>arr[c]){
              count.push(b-a);
              if(b-a==1){
                  break;
              }
              b--;
              a=0;
          }else{
              a++;
          }
       }
    }

    let sum=0;
    for(let a=0;a<=count.length-1;a++){
        sum=sum+count[a]
    };
    return sum
};