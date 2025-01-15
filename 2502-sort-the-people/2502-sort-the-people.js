/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let arr=[];
    for(let a=0;a<=names.length-1;a++){
        arr.push([heights[a],names[a]])
    }
    arr.sort(function(a,b){
        return b[0]-a[0]
    });
    let crr=[];
    for(let a=0;a<=arr.length-1;a++){
        crr.push(arr[a][1])
    }
    return crr
};