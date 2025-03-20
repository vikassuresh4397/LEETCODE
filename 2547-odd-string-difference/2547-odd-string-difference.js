/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let alpha= [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
let grp=""
for(let a=0;a<=words.length-1;a++){
    for(let b=0;b<=words[a].length-1;b++){
        grp=grp+words[a][b]
    }
}
console.log(grp);
let brr=[]
for(let a=0;a<=grp.length-1;a++){
    for(let b=0;b<=alpha.length-1;b++){
       if(grp[a]==alpha[b]){
           brr.push(b);
           break;
       }
    }
}
console.log(brr);
let crr=[];
let x=words[0].length;
console.log(x);
let y=0,grr=[]
for(let a=0;a<=brr.length-1;a++){
     if(y==x || a==brr.length-1){
         y=0;
         if(a==brr.length-1){
               grr.push(brr[brr.length-1])
         }
       
         crr.push(grr);
         grr=[]
     }
   grr.push(brr[a]);
   y++
  
    
}
console.log(crr);
let prr=[]
for(let a=0;a<=crr.length-1;a++){
    grr=[]
    for(let b=0;b<=crr.length-2;b++){
        grr.push(crr[a][b+1]-crr[a][b])
    }
    prr.push(grr)
}
// console.log("prr",prr);
let obj={};
for(let a=0;a<=prr.length-1;a++){
    if(obj[prr[a]]==undefined){
        obj[prr[a]]=[a]
    }else{
        obj[prr[a]].push(a)
    }
}
console.log(obj);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
for(let key in obj){
    if(obj[key].length==1){
        return words[obj[key][0]]
    }
}

};