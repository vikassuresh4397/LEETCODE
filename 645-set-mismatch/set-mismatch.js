/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort(function(a,b){
        return a-b
    });
let copy=0,count=1,miss=0,obj={};
   for(let a=0;a<=nums.length-1;a++){
       if(nums[a]==nums[a+1]){
           copy=nums[a]
       }
   }

    for(let a=0;a<=nums.length-1;a++){
        if(obj[nums[a]]==undefined){
           obj[nums[a]]=1 
        }else{
            obj[nums[a]]++;
        }
    }

     count=1;

      for(let a=0;a<=nums.length-1;a++){
          if(obj[count]==undefined){
              miss=count;
              break;
          }else{
              count++;
          }
      }





   return [copy,miss]
};