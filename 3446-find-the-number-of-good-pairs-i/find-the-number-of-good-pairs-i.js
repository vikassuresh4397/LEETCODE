/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(arr1, arr2, k) {
    let count=0;
    for(let a=0;a<=arr1.length-1;a++){
        for(let b=0;b<=arr2.length-1;b++){
            let x=arr2[b]*k
            if(arr1[a]%x==0){
                count++
            }
        }
    }
    
    return count
};