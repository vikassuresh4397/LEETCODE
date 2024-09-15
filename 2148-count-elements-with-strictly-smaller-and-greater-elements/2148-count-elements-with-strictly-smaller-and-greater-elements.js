/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(arr) {

arr.sort(function(a,b){
    return a-b
})

let obj={};
for(let a=0;a<=arr.length-1;a++){
    if(obj[arr[a]]==undefined){
        obj[arr[a]]=1
    }else{
        obj[arr[a]]++;
    }
}

let brr=[]
for(let key in obj){
    brr.push(+key)
}

 brr.sort(function(a,b){
     return a-b
 })

let count=[]
for(let a=1;a<=brr.length-2;a++){
    if(brr[a-1]<brr[a] && brr[a]<brr[a+1]){
        count.push(brr[a])
    }
}

let bount=0
for(let a=0;a<=count.length-1;a++){
    if(obj[count[a]]!==undefined){
        bount=bount+obj[count[a]]
    }
}
return (bount)
};