/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(arr) {
    let nos=0;
    for(let a=0;a<=arr.length-1;a++){
        let b=Math.ceil(arr[a][11]);
        let c=Math.ceil(arr[a][12]);
        let d=""+b+c;
        d=Math.ceil(d);
        if(d>60){
            nos++
        }
    }
    return nos
};