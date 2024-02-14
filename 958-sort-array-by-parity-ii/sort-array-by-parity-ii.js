/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(arr) {
    let err=[],orr=[],trr=new Array(arr.length);
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]%2==0 || arr[a]==0){
            err.push(arr[a])
        }else{
            orr.push(arr[a])
        }
    }

let o=0,e=0;
    for(let a=0;a<=arr.length-1;a++){
        if(a%2==0){
            // trr.push(err[e]);
            trr[a]=err[e]
            e++
        }else{
            //  trr.push(err[o]);
             trr[a]=orr[o]
            o++
        }
    }

    return trr
};