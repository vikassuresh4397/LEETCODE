/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
    let obj={},neg=0,negative=[];
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]<0){
            negative.push(arr[a]*(-1))
        }
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    }
//      console.log(obj,"obj")
//   console.log(negative,"negative");
  let obj2={}
  for(let a=0;a<=negative.length-1;a++){
       if(obj2[negative[a]]==undefined){
            obj2[negative[a]]=1
        }else{
            obj2[negative[a]]++;
        }
  }
//   console.log(obj2,"obj2");
  let new1=[];
  for(let key in obj2){
      for(let a=0;a<=obj2[key]-1;a++){
          new1.push(+key)
      }
  }
  
//   console.log(new1,"new1")
    let new2=[];
    for(let a=new1.length-1;a>=0;a--){
        new2.push(new1[a]*(-1))
    }
    // console.log(new2,"new2");
    for(let key in obj){
        if(key>=0){
        //   console.log(key);
          for(let a=1;a<=obj[key];a++){
              new2.push(+key)
          }
        }
    }
    arr=[];
    //  console.log(arr,"arr")
    for(let a=0;a<=new2.length-1;a++){
        arr[a]=new2[a]
    }
    //  console.log(new2,"new2")
    //  console.log(arr,"arr")
    return arr
};