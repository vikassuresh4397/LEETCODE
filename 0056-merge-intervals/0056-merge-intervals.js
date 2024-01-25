/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    arr.sort(function (a, b) {
        return a[0] - b[0];
    });
    //  console.log(arr);
    let crr = [arr[0]];

    let b = 1;
    for (let a = 1; a <=arr.length - 1; a++) {
        // console.log(crr[crr.length-1][1])
        if(crr[crr.length-1][1]>=arr[a][0] && crr[crr.length-1][1]<arr[a][1]){
           let x=[crr[crr.length-1][0],arr[a][1]] ;
           crr.pop();
           crr.push(x)
        }
       else if(crr[crr.length-1][1]<arr[a][0] && arr[a][0]<=arr[a][1]){
           crr.push(arr[a])
       }
    }
  return crr
};