/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(arr1, arr) {
    let stack=[],a=0,b=a+1;
    while(a<=arr.length-1){
        if(arr[b]>arr[a]){
            stack.push(arr[b]);
            a++;
           b=a+1;
        }else{
            if(b>arr.length-1){
                stack.push(-1);
                 a++;
           b=a+1;
            }else{
                b++;
            }
        }
    }
    
    let brr=[];
    for(let a=0;a<=arr.length-1;a++){
        brr.push([arr[a],stack[a]])
    }
    // console.log(brr)
    
    // console.log(stack);
    
    let obj={};
    for(let a=0;a<=brr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=brr[a][1]
        }
    }
    let crr=[]
    for(let a=0;a<=arr1.length-1;a++){
        if(obj[arr1[a]]==undefined){
            continue;
        }else{
            crr.push(+obj[arr1[a]])
        }
    }
    
    // console.log(crr)
    return crr
    // console.log(obj)
};