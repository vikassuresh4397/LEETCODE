/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let brr=[];
    for(let a=0;a<=arr.length-1;a++){
        brr.push(arr[a])
    }
    arr.sort(function(a,b){
        return a-b
    });
    
    let obj={},count=1;
    
    for(let a=0;a<=arr.length-1;a++){
      if(obj[arr[a]]==undefined){
          obj[arr[a]]=count;
          count++;
      }
    }
//   console.log(obj)
   
  let result=[]
   
  for(let a=0;a<=brr.length-1;a++){
      let num = brr[a];
      result.push(obj[num]) 
  }
   
    return result;
};