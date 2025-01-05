/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let obj={},brr=[],zero=0;
    for(let a=0;a<=arr.length-1;a++){
        let x=arr[a]*2;
        if(arr[a]==0){
            zero++
        }
        if(zero>=2){
            return true
        }
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }
        
        brr.push(x)
    }
    
    for(let a=0;a<=brr.length-1;a++){
        if(obj[brr[a]]!==undefined){
            if(brr[a]==0&&zero==1){
                continue
            }else{
                obj[brr[a]]++
            }
            
        }
    }
    //   console.log(obj)
    for(let key in obj){
        if(obj[key]>=2){
            return true
        }
    }
    return false
};