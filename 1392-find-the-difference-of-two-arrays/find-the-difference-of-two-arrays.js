/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(arr1, arr2) {
    let obj={};

    for(let a=0;a<=arr1.length-1;a++){
        if(obj[arr1[a]]==undefined){
            obj[arr1[a]]=1
        }
    }
let arr3=[];
      for(let a=0;a<=arr2.length-1;a++){
        if(obj[arr2[a]]==undefined){
           continue;
        }else{
            arr3.push(arr2[a])
        }
    }
let obj1={}
  for(let a=0;a<=arr3.length-1;a++){
        if(obj1[arr3[a]]==undefined){
            obj1[arr3[a]]=1
        }
    }





    



    let newarr1=[],newarr2=[],obj2={},obj3={};
 for(let a=0;a<=arr1.length-1;a++){
        if(obj1[arr1[a]]==undefined && obj2[arr1[a]]==undefined){
            obj2[arr1[a]]=1;
            newarr1.push(arr1[a])
        }
    }

     for(let a=0;a<=arr2.length-1;a++){
        if(obj1[arr2[a]]==undefined && obj3[arr2[a]]==undefined){
             obj3[arr2[a]]=1;
            newarr2.push(arr2[a])
        }
    }

return [newarr1,newarr2]
};