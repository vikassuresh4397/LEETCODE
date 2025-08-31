/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(arr1,arr2) {
    let obj={};
    for(let a=0;a<=arr1.length-1;a++){
         if(obj[arr1[a][0]]==undefined){
             obj[arr1[a][0]]=[arr1[a][1]]
         }
       
    }
     console.log(obj)
    for(let a=0;a<=arr2.length-1;a++){
          if(obj[arr2[a][0]]==undefined){
              obj[arr2[a][0]]=[arr2[a][1]]
          }else{
              obj[arr2[a][0]].push(arr2[a][1])
          }
    }
    console.log(obj)
    let brr=[];
    for(let key in obj){
        let x=+obj[key].length;
        console.log(x)
        let sum=0
        for(let a=0;a<=x-1;a++){
            sum=sum+obj[key][a]
        }
        brr.push([+key,sum])
    }
    console.log(brr);
    
    let crr=brr.sort(function(a,b){
        return a[0]-b[0]
    })
    return (crr)
    
    
};