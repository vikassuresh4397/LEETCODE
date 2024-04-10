/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(arr) {
    let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sma="abcdefghijklmnopqrstuvwxyz";
    
//     All letters in this word are capitals, like "USA".

// step1
let count=0,obj={},rount=0;
for(let a=0;a<=cap.length-1;a++){
    if(obj[cap[a]]==undefined){
        obj[cap[a]]=1
    }
}





// step2
for(let a=0;a<=arr.length-1;a++){
    if(obj[arr[a]]==undefined){
       obj[arr[a]]=1
    }else{
        obj[arr[a]]++;
        count++;
    }
}









//  console.log("ccccccccccccccccc",count)

// step3
let hount=count+0;

for(let key in obj){
    if(obj[key]!=1){
        // console.log("ffff",count)
        count=count+1-obj[key]
        //  console.log("llll",count)
    }
}

if(count==0 && hount==arr.length){
    return true
}


// step1
let yount=0,obj1={},lount=0;
for(let a=0;a<=cap.length-1;a++){
    if(obj1[sma[a]]==undefined){
        obj1[sma[a]]=1
    }
}





// step2
for(let a=0;a<=arr.length-1;a++){
    if(obj1[arr[a]]==undefined){
        obj1[arr[a]]=1
    }else{
             obj1[arr[a]]++;
        yount++;
    }
}


// step3
let iount=yount+0;
for(let key in obj1){
    if(obj1[key]!=1){
        yount=yount+1-obj1[key]
    }
}
if(yount==0 && iount==arr.length){
    return true
}


if(cap.includes(arr[0])){
   let obj2={};
   for(let a=0;a<=sma.length-1;a++){
       if(obj2[sma[a]]==undefined){
           obj2[sma[a]]=1
       }
   }
   let total=0;
   for(let key in obj2){
       total=total+obj2[key]
   }
//   console.log(total)
   for(let a=1;a<=arr.length-1;a++){
        if(obj2[arr[a]]==undefined){
           obj2[arr[a]]=1;
           return false
       }else{
           obj2[arr[a]]++
       }
   }
   
    for(let key in obj2){
       total=total-obj2[key]
   }
   total=total*(-1)
//   console.log(total);
   
   if(total==arr.length-1){
       return true
   }
   
//   console.log(obj2)

}
    




return false



// console.log("ccccccccccccccccc",count)

// console.log(obj)

// All letters in this word are not capitals, like "leetcode".



// Only the first letter in this word is capital, like "Google".
};