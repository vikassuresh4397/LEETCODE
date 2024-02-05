/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(arr, letter) {
       let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
    
    let count=0;
    for(let key in obj){
        if(key==letter){
            count=(+obj[key]);
            break;
        }
    }
    let crr=[]
    crr.push(+(count/arr.length));
   let z=crr[0]
    let y=z*100;
    return Math.floor(y)
};