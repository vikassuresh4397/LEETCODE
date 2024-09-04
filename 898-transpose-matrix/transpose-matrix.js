/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr = [];
    
    for(let a = 0; a < matrix[0].length; a++) {
        let grr = [];
        for(let b = 0; b < matrix.length; b++) {
            grr.push(matrix[b][a]);
        }
        arr.push(grr);
    }
    
    return arr;
};
