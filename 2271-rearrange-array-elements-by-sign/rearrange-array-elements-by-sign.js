/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(arr) {
    let prr=[],nrr=[],trr=new Array(arr.length);
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]>=0){
            prr.push(arr[a])
        }else{
            nrr.push(arr[a])
        }
    }
    let b=0
    let p=prr.length,n=nrr.length;
  

  for(let a=0;a<=prr.length-1;a++){
       trr[b]=prr[a];
    b++;
    trr[b]=nrr[a];
     b++;
  }

    return trr

   

};