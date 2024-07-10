/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(arr, k) {
    let prr = [];
    let nrr = [];
    
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] < 0) {
            nrr.push(arr[a]);
        } else {
            prr.push(arr[a]);
        }
    }
    
    let obj1 = {};
    for (let a = 0; a < nrr.length; a++) {
        if (obj1[nrr[a]] === undefined) {
            obj1[nrr[a]] = 1;
        } else {
            obj1[nrr[a]]++;
        }
    }
    // console.log(obj1);
    let obj2={};
     for (let a = 0; a < prr.length; a++) {
        if (obj2[prr[a]] === undefined) {
             
            obj2[prr[a]] = 1;
        } else {
            obj2[prr[a]]++;
        }
    }
    // console.log(obj2);
    let obj3={};
    for(let key in obj1){
        let x=obj1[key]
        key=key*(-1);
        obj3[key]=x
    }
    //  console.log(obj3);
     let count=0;
     let newArr1=[]
     for(let key in obj2){
         newArr1.push([key,obj2[key]])
     }
    //  console.log(newArr1)
     let newArr2=[];
     for(let a=0;a<=newArr1.length-1;a++){
         newArr2.push(newArr1[newArr1.length-1-a])
     }
    //  console.log(newArr2);
     
     for(let key in obj3){
         let x=key*(-1)
         newArr2.push([x,obj3[key]])
     }
    //  console.log(newArr2);
     
     for(let a=0;a<=newArr2.length-1;a++){
         count=count+newArr2[a][1];
         if(count>=k){
            // console.log(newArr2[a][0],"gggggggg");
            let x=newArr2[a][0];
            // console.log(x)
            return x
         }
     }
    //  for(let key in obj3){
    //      newArr1.push([key,obj3[key]])
    //  }
};