/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(arr1,arr2) {
    let obj1={};
    for(let a=0;a<=arr1.length-1;a++){
        if(obj1[arr1[a]]==undefined){
            obj1[arr1[a]]=1
        }else{ 
          obj1[arr1[a]]++
        }
    }
    //  console.log("obj1",obj1)
    for(let key in obj1){
        if(obj1[key]>1){
            delete obj1[key]
        }
    }
    // console.log("obj1",obj1)
        let obj2={};
    for(let a=0;a<=arr2.length-1;a++){
        if(obj2[arr2[a]]==undefined){
            obj2[arr2[a]]=1
        }else{ 
           obj2[arr2[a]]++
        }
    }
    // console.log("obj2",obj2)
    
     for(let key in obj2){
        if(obj2[key]>1){
            delete obj2[key]
        }
    }
   
    //   console.log("obj2",obj2);
      let obj3={};
        for(let key in obj1){
        if(obj3[key]==undefined){
            obj3[key]=1
        }else{
            obj3[key]++
        }
    }
    // console.log(obj3)
     for(let key in obj2){
        if(obj3[key]==undefined){
            obj3[key]=1
        }else{
            obj3[key]++
        }
    }
    
    
    // console.log(obj3);
    
    let count=0;
    for(let key in obj3){
        if(obj3[key]==2){
            count++
        }
    }
    
    return count

};