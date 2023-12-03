/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
   for(let a=0;a<=words.length-1;a++){
       let array1=words[a].split("");
        const found = array1.find((element) => element == x);
        if(found){
            arr.push(a);
            
        }
   }

   return arr
};