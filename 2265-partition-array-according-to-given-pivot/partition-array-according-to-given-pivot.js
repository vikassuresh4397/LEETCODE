/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(arr, k) {
    // arr.sort(function(a,b){
    //     return a-b;
    // })

    let lrr=[],mrr=[],rrr=[],trr=new Array(arr.length);
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]<k){
            lrr.push(arr[a])
        }else if(arr[a]==k){
            mrr.push(arr[a])
        }else{
            rrr.push(arr[a])
        }
    }
     
     for(let a=0;a<=lrr.length-1;a++){
         trr[a]=lrr[a]
     }
      let x=lrr.length;
     for(let a=0;a<=mrr.length-1;a++){
         trr[x]=mrr[a];
         x++
     }

    
     for(let a=0;a<=rrr.length-1;a++){
         trr[x]=rrr[a];
         x++
     }

     return trr

};