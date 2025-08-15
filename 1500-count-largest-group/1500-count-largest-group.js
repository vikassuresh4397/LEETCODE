/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
let arr=[];
for(let a=1;a<=n;a++){
    arr.push(a)
}
console.log(arr)
let brr=[]
for(let a=1;a<=n;a++){
    // console.log(a);
    let str=a+'';
    if(wow(str)){
      brr.push(wow(str))  
    }
    
    
    // console.log("dfaeg",x)
}
let obj={};

for(let a=0;a<=brr.length-1;a++){
    if(obj[brr[a]]==undefined){
        obj[brr[a]]=[a+1]
    }else{
        obj[brr[a]].push(a+1)
    }
}
console.log(obj);


let max=0;
for(let key in obj){
    if(obj[key].length>max){
        max=obj[key].length
    }
}
console.log("safgaegaegh",max);

let count=0;

for(let key in obj){
    if(obj[key].length==max){
        count++
    }
}

console.log("dva",count)
console.log(brr)
function wow(str){
    // console.log("dgaehsRHr",str);
    let x=str.split('').reduce((acc, digit) => acc + Number(digit), 0);
    // console.log(typeof x);
    let y=x+"";
   return y
}
   return count 
    
};