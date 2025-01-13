/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(arr1,arr2) {
    let obj={};
    for(let a=0;a<=arr1.length-1;a++){
        if(obj[arr1[a]]==undefined){
            obj[arr1[a]]=1
        }else{
            obj[arr1[a]]++
        }
    }
    for(let a=0;a<=arr2.length-1;a++){
         if(obj[arr2[a]]==undefined){
            obj[arr2[a]]=1
        }else{
            obj[arr2[a]]--
        }
    }
    let cbj={}
     for(let a=0;a<=arr2.length-1;a++){
        if(cbj[arr2[a]]==undefined){
            cbj[arr2[a]]=1
        }else{
            cbj[arr2[a]]++
        }
    }
    for(let a=0;a<=arr1.length-1;a++){
         if(cbj[arr1[a]]==undefined){
            cbj[arr1[a]]=1
        }else{
            cbj[arr1[a]]--
        }
    }

 for(let key in cbj){
        if(cbj[key]>=4){
            return false
        }
    }

    for(let key in obj){
        if(obj[key]>=4){
            return false
        }
    }
    return true
};