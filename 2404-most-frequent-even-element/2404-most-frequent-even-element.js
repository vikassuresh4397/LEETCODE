/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    } 
    // console.log(obj)
    let max=0,crr=[];
    for(let key in obj){
        if(max<=obj[key] && key%2==0){
            max=obj[key];
            // console.log(key)
        }
    }
    let grr=[]
    for(let key in obj){
        if(max==obj[key]&& key%2==0){
            grr.push(+key)
        }
    }
    grr.sort(function(a,b){
        return a-b
    })
    
    if(grr.length==0){
        return -1
    }
    
    return grr[0]
    //  console.log(grr)
   
    
    
};