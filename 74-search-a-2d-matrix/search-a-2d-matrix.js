/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let a=0;a<=matrix.length-1;a++){
        for(let b=0;b<=matrix[0].length-1;b++){
            if(matrix[a][b]==target){
                return true
            }
        }
    }
    return false
};