/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(n) {
    n=n+1
     if(n==0) return [[1]];
   
    let arr=[[1]]
    for(let a=1;a<=n-1;a++){
        if(arr.length==1){
            arr.push([1,1])
        }else{
            let str = arr[arr.length-1];
              let grr=[];
            grr.push(1)
            for(let b=1;b<=str.length-1;b++){
                
                grr.push(Number(str[b-1])+Number(str[b]))
            }
            grr.push(1);
            arr.push(grr)
        }
    }
    return (arr[arr.length-1])
};