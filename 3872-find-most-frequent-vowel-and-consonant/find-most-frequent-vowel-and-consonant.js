/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
   let vowel=0,con=0;
   for(let key in obj){
       if(key=="a"||key=="e"||key=="i"||key=="o"||key=="u"){
        if(obj[key]>vowel){
            vowel=obj[key]
        }
       }else{
        if(obj[key]>con){
            con=obj[key]
        }
       }
   }

return vowel+con
};