/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr=[]
    for(let a=left;a<=right;a++){
        let y=a;
        let x=a+"";
        let count=0
        for(let b=0;b<=x.length-1;b++){
            let z=+x[b];
            if(y%z==0){
                count++;
            }else{
                break;
            }
        }
        
        if(count==x.length){
            arr.push(y)
        }
    }
    
    return arr
};