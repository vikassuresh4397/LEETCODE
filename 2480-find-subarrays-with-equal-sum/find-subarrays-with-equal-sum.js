/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(arr) {
    let crr=[]
    for(let a=0;a<=arr.length-1;a++){
        let sum=[],total=0
        for(let b=a;b<=arr.length-1;b++){
            sum.push(arr[b])
            total=total+arr[b]
       
       
       if(sum.length==2){
        //   console.log(sum);
           crr.push(total)
       }else if(sum.length>=3){
           break;
       }
           
        }
    }
    //  console.log(crr)
    let obj={};
    
    for(let a=0;a<=crr.length-1;a++){
        if(obj[crr[a]]==undefined){
            obj[crr[a]]=1
        }else{
            obj[crr[a]]++
        }
    }
  
    for(let key in obj){
        if(obj[key]>=2){
            return true
        }
    }
    
    return false
};