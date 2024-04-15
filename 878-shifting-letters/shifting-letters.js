/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(str, shifts) {
    let alpha="abcdefghijklmnopqrstuvwxyz";
    str=str.split("");
    let count=0,rount=shifts.length;
    for(let a=0;a<=shifts.length-1;a++){
        count=count+shifts[a]
    }
    let b=0;
    // console.log(count)
    for(let a=0;a<=str.length-1;a++){
        if(rount!==0){
            let total=(count+alpha.indexOf(str[a]))%26;
            str[a]=alpha[total];
           
            count=count-shifts[b];
            b++;
            rount--;
        }else{
            break;
        }
    }
    
    return str.join("")
};