/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(arr) {
    let brr=[]
   for(let a=0;a<=arr.length-1;a++){
       brr.push([arr[a],a])
   }
//   console.log(brr);
   brr.sort(function(a,b){
       return b[0]-a[0]
   })
    //  console.log(brr);
     let count=1;
     for(let a=0;a<=brr.length-1;a++){
         if(count==1){
             brr[a].push("Gold Medal");
             count++
         }else if(count==2){
             brr[a].push("Silver Medal");
             count++
         }else if(count==3){
             brr[a].push("Bronze Medal");
             count++
         }else {
             brr[a].push(count+"");
              count++
         }
     }
    //  console.log(brr);
      brr.sort(function(a,b){
       return a[1]-b[1]
   })
    //   console.log(brr);
       let crr=[];
       for(let a=0;a<=brr.length-1;a++){
           crr.push(brr[a][2])
       };
       return (crr)
     
};