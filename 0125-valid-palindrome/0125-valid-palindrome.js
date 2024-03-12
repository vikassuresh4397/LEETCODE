/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(lowercaseSentence) {
    let arr = lowercaseSentence.toLowerCase();
    // console.log(arr);
    let words="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
    let brr=[];
    for(let a=0;a<=arr.length-1;a++){
        if(words.includes(arr[a])){
            brr.push(arr[a])
        }
    }
    // console.log(brr);
    
    for(let a=0;a<=brr.length-1;a++){
        if(brr[a]!==brr[brr.length-1-a]){
            return false
        }
    }
    return true
};