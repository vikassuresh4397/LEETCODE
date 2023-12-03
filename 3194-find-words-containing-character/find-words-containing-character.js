/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
    for(let a=0;a<=words.length-1;a++){
        for(let b=0;b<=words[a].length-1;b++){
            if(words[a][b]==x){
                arr.push(a);
                break
            }
        }
    }
    return arr
};