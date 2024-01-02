/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var findMatrix = function(arr) {
  let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    }
    //  console.log(obj);
    let brr=[];
    for(let key in obj){
        brr.push(+key);
        obj[key]--;
    }
    
    let max=0;
    
    for(let key in obj){
        if(max<obj[key]){
            max=obj[key]
        }
    }
    // console.log("max",max)
    //   console.log(obj);
     let grr=[brr]
     for(let a=0;a<=max-1;a++){
         let crr=[]
         for(let key in obj){
             if(obj[key]!==0&&obj[key]>0){
                 crr.push(+key);
                  obj[key]--;
             }
         }
         if(crr.length>0){
             grr.push(crr)
         }
        //  console.log(obj)
        //  console.log(crr)
     }
    return grr
};