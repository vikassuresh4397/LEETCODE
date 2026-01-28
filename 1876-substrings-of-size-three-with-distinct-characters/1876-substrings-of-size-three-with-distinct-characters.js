/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(arr) {
    let crr=[], count=0;
    for(let a=0;a<=arr.length-3;a++){
        let grr=[]
        for(let b=a;b<a+3;b++){
            grr.push(arr[b])
        }
        crr.push(grr)
    }

console.log(crr)
    
    for(let a=0;a<=crr.length-1;a++){
        let obj={}
        for(let b=0;b<=2;b++){
            // console.log(crr[a][b]);
            if(obj[crr[a][b]]==undefined){
                obj[crr[a][b]]=1
            }else{
                obj[crr[a][b]]++
            }
        }
        console.log(obj);
        let rount=0,bount=0
        for(let key in obj){
            if(obj[key]>1){
                rount++
            }else{
                bount++
            }
        }
        if(bount==3){
            count++
        }
    }
return count
   
};