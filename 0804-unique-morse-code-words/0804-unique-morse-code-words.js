/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(arr) {
    let code=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alpha="abcdefghijklmnopqrstuvwxyz";
    let grr=[]
    for(let a=0;a<=arr.length-1;a++){
        let str=""
        for(let b=0;b<=arr[a].length-1;b++){
            let index=alpha.indexOf(arr[a][b]);
            str=str+code[index]
        }
        grr.push(str)
    }
    
    let obj={};
    
    for(let a=0;a<=grr.length-1;a++){
        if(obj[grr[a]]==undefined){
            obj[grr[a]]=1
        }else{
            obj[grr[a]]++;
        }
    }
    let count=0;
    for(let key in obj){
        count=count+1
    }
    
    return count
    
    
};