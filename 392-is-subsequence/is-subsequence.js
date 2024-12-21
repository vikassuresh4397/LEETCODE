/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(arr, brr) {
    let obj={},count=0,bount=0;
    for(let a=0;a<=arr.length-1;a++){
        if(obj[[arr[a],a]]==undefined){
            obj[[arr[a],a]]=1
        }
    }
    //  console.log(obj)
    for(let a=0;a<=brr.length-1;a++){
         if(obj[[brr[a],count]]!=undefined){
            obj[[brr[a],count]]++;
            count++
        }
    }
    for(let key in obj){
        if(obj[key]==2){
            bount++
        }
    }
    //  console.log(obj)
    // console.log(bount)
    if(bount==arr.length){
        return true
    }
    return false
    
};
