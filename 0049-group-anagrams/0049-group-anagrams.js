/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj={};
    for(let a=0;a<=strs.length-1;a++){
       let y=strs[a];
    //   console.log("y",y)
       let x=strs[a].split("").sort().join("");
    //   console.log(x)
   if(obj[x]==undefined){
       obj[x]=[y]
   }else{
       obj[x].push(y)
   }
    }
    // console.log(obj)
    let count=1;
let brr=[]
for(let key in obj){
    // console.log(obj[key].length);
    brr.push(obj[key])
}

// console.log(brr);

brr.sort(function(a,b){
    return a.length-b.length
})
// console.log(brr);
return brr
};