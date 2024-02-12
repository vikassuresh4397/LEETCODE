/**
 * @param {string[]} words
 * @return {string[]}
 */
// 2273

var removeAnagrams = function(str) {
    //   console.log("......................................................")
    let arr=[];
    for(let a=0;a<=str.length-1;a++){
         let obj={};
       for(let b=0;b<=str[a].length-1;b++){
            if(obj[str[a][b]]==undefined){
                obj[str[a][b]]=1
            }else{
                obj[str[a][b]]++;
            }
       }
       
    //   let sortedKeys=Object.keys(obj).sort();
    //   console.log(sortedKeys,"dsgsdg");
       
      let sortedKeys = Object.keys(obj).sort();

// Create a new object with sorted keys
let sortedObj = {};
sortedKeys.forEach(key => {
    sortedObj[key] = obj[key];
});

// console.log(sortedObj,"dgfew");
       
       let grr=[]
       for(let key in sortedObj){
           grr.push([key,sortedObj[key]])
       }
       
       arr.push(grr);
    }
    
    // console.log(arr);
    
    let newObj={},obj2={};
    
    for(let a=0;a<=arr.length-1;a++){
        if(newObj[arr[a]]==undefined){
            newObj[arr[a]]=[a];
            obj2[arr[a]]=[a];
        }else{
            //  console.log(newObj[arr[a]],a);
            //   console.log(newObj[arr[a]][newObj[arr[a]].length-1]);
               
               if(((a)-newObj[arr[a]][newObj[arr[a]].length-1])>=2){
                //   console.log("uuu",newObj[arr[a]][newObj[arr[a]].length-1],a+1)
                   obj2[arr[a]].push(a)
               }
          newObj[arr[a]].push(a);
          
          
        }
    }
//      console.log(newObj,"newObj")
//   console.log(obj2,"ob2");
   
   let orr=[]
  for(let key in obj2){
     for(let a=0;a<=obj2[key].length-1;a++){
         orr.push(obj2[key][a])
     }
  }
  
  orr.sort(function(a,b){
      return a-b
  })
  
//   console.log(orr,"orr")
  let grr=[]
  for(let a=0;a<=orr.length-1;a++){
      grr.push(str[orr[a]])
  }
  
//   console.log(orr)
  return grr

};