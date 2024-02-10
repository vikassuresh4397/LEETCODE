/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(str) {
    let grr=[],hrr=[]
    for(let a=0;a<=str.length-1;a++){
        let brr="";
        for(let b=a;b<=str.length-1;b++){
            brr=brr+str[b];
            grr.push(brr)
        }
    }
    
    for(let a=0;a<=grr.length-1;a++){
        let count=0
        for(let b=0;b<=grr[a].length-1;b++){
            if(grr[a][b]==grr[a][grr[a].length-1-b]){
                count++
            }else{
                break;
            }
            
        }
        
        if(count==grr[a].length){
            hrr.push(grr[a])
        }
    }
    
    return hrr.length
};