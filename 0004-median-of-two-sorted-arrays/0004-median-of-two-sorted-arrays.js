/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(arr1, arr2) {
    let mergeArr= [...arr1,...arr2];
    mergeArr.sort((a,b)=>{
        return a-b;
    })
    if(mergeArr.length%2==0){
        let a=mergeArr.length/2;
         let b=(mergeArr.length/2)-1;
         let ans=(mergeArr[a]+mergeArr[b])/2;
        ans=ans.toFixed(5);
         return ans
         
    }else{
         let b=(mergeArr.length/2)-1+0.5;
         let ans=(mergeArr[b]).toFixed(5);
        //  ans=ans.toFixed(5)
          return ans
    }
};