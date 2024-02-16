/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
    
    let brr=[];
    
    for(let key in obj){
        brr.push([+key,obj[key]])
    }
    
    brr.sort(function(a,b){
        return a[1]-b[1]
    })
    
    
    //  console.log(brr)
// let obj1={};

for(let a=0;a<=brr.length-1;a++){
    if(k>brr[a][1]){
        k=k-brr[a][1];
        brr[a][1]=0
    }else if(k==brr[a][1]){
        k=k-brr[a][1];
        brr[a][1]=0
    }else{
        brr[a][1]=brr[a][1]-k;
        k=0;
        break;
    }
}
let y=0
for(let a=0;a<=brr.length-1;a++){
   if(brr[a][1]>0){
       y++
   }
}

//  console.log(brr)
    return y

};