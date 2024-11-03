/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(frr, brr) {
//   let crr=[ 'c', 'd', 'e', 'a', 'b' ];
  
//   let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(0, 1);  // Removes 1 element at index 2
// let result=arr.join("")

// console.log(arr);
// console.log(result)



let obj={
    
}

obj[brr];
// console.log(obj);
if(obj[brr]==undefined){
    obj[brr]=1
}
//   console.log(obj);
  
  let arr=frr.split("");
//   console.log(arr,"ffffffffffffff");
  let x=arr.length-1
  for(let a=0;a<=x;a++){
     let z=arr.join("");
    //   console.log("zzzzzzzzzzzzz",z);
      if(obj[z]!==undefined){
    return true
}
     let first=arr.splice(0,1);
    //  console.log("first",first);
    //  console.log("arr1",arr)
     arr.push(first[0])
    //  console.log("arr2",arr)
     z=arr.join("");
        if(obj[z]!==undefined){
    return true
}
     
  }
  
  return false
  
};