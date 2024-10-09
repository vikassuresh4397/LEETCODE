/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let final=0
     for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let count=0;
                if(Math.abs(arr[i] - arr[j]) <= a){
                    count++
                }
                if(Math.abs(arr[j] - arr[k]) <= b){
                    count++
                }
                if(Math.abs(arr[i] - arr[k]) <= c){
                    count++
                }
                
                if(count==3){
                    final++
                }
                
            }
        }
     }
    
    return final
};