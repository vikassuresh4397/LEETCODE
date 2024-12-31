/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(arr) {
let positive=[];
let negative=[];
let sum=1

for(let a=0;a<=arr.length-1;a++){
    if(arr[a]>=0){
        positive.push(arr[a])
    }else{
        negative.push(arr[a]*-1)
    }
}
positive.sort(function(a,b){
    return b-a
})
negative.sort(function(a,b){
    return b-a
})

if(positive.length==0){
    negative.sort(function(a,b){
    return a-b
})
return (-1)*negative[0]*negative[1]*negative[2]
}


if(negative.length==1){
    sum=sum*positive[0]*positive[1]*positive[2];
    //  console.log("1")
    return sum
}else if(negative.length==2){
    if((positive[0]*positive[1])<(negative[0]*negative[1])){
        sum=sum*negative[0]*negative[1]*positive[0];
        //  console.log("2")
        return sum
    }else{
       let x=negative[0]*negative[1]*positive[0];
        let y=negative[0]*negative[1]*positive[1];
         let z=negative[0]*negative[1]*positive[2];
       
       let d=positive[1]*positive[2]*negative[0]*(-1);
         let e=positive[0]*positive[1]*negative[0]*(-1);
         let brr=[x,y,z,d,e];
         brr.sort(function(a,b){
             return b-a
         });
        //  console.log(brr)
         return brr[0]
             
    }
}else{
    let tn=[];
    // console.log("4")
    let x=negative[0]*negative[1],y=negative[2]*negative[1],z=negative[2]*negative[0];
    if(!isNaN(x&&y&&z)){
          tn.push(negative[0]*negative[1],negative[2]*negative[1],negative[2]*negative[0]);
    }
//   console.log(tn,"tn")
    let total=[];
  
     if (!isNaN(tn[0]*positive[0])){
         total.push(tn[0]*positive[0]);
     }
      if (!isNaN(sum*negative[0]*negative[1]*negative[2])){
         total.push(sum*negative[0]*negative[1]*negative[2]*(-1))
     }
       if (!isNaN(sum*negative[0]*negative[1]*positive[1])){
         total.push(sum*negative[0]*(-1)*negative[1]*positive[1]);
     }
    if (!isNaN(sum*positive[0]*positive[1]*positive[2])){
         total.push(sum*positive[0]*positive[1]*positive[2]);
     }
     
 
    let grr=[];
    // console.log(total,"dddddddddddgaegheha");
 
    total.sort(function(a,b){
        return b-a
    });
    return total[0]
    
}


// console.log(positive,negative)
};