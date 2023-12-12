/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(matrix) {
    let sum=0;
    
    for(let a=0;a<=matrix.length-1;a++){
        sum=sum+matrix[a][a]
    }
    
    for(let a=0;a<=matrix.length-1;a++){
        for(let b=0;b<=matrix[a].length-1;b++){
            if(a+b==matrix.length-1 && a!=b){
                 sum=sum+matrix[a][b]
            }
        }
    }
    
    return sum
};