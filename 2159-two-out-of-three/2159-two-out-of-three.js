/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(arr1,arr2,arr3) {
    let obj={};
    for(let a=0;a<=arr1.length-1;a++){
        if(obj[arr1[a]]==undefined){
            obj[arr1[a]]=1
        }
    }
    
    
     let cbj={};
    for(let a=0;a<=arr2.length-1;a++){
        if(cbj[arr2[a]]==undefined){
            cbj[arr2[a]]=1
        }
    }
    
    
     let bj={};
    for(let a=0;a<=arr3.length-1;a++){
        if(bj[arr3[a]]==undefined){
            bj[arr3[a]]=1
        }
    }
    let crr=[]
    for(let key in obj){
        crr.push(key)
    }
     for(let key in bj){
        crr.push(key)
    }
     for(let key in cbj){
        crr.push(key)
    }
    // console.log(crr);
    let obj1={};
    for(let a=0;a<=crr.length-1;a++){
        if(obj1[crr[a]]==undefined){
            obj1[crr[a]]=1
        }else{
            obj1[crr[a]]++
        }
    }
    // console.log(obj1);
    let drr=[]
    for(let key in obj1){
        if(obj1[key]>=2){
            drr.push(+key)
        }
    }
    return drr
};