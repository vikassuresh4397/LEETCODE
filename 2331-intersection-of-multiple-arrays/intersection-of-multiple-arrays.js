/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {


    if(nums.length==1){
    nums[0].sort(function(a,b){
            return a-b
        });
        // console.log(nums)
        return nums[0]
    }
    let obj={};

    for(let a=0;a<=nums[0].length-1;a++){
        if(obj[nums[0][a]]==undefined){
            obj[nums[0][a]]=1
        }
    }

    let obj2={}
 for(let b=1;b<=nums.length-1;b++){
      for(let a=0;a<=nums[b].length-1;a++){
        if(obj[nums[b][a]]==undefined){
           continue;
        }else{
         
if(obj2[nums[b][a]]==undefined){
          obj2[nums[b][a]]=1
        }else{
         obj2[nums[b][a]]++
        }
        }
      }
 }

 let x=nums.length-1;
let brr=[];
 for(let key in obj2){
    if(obj2[key]==x){
          brr.push(+key)
    }
 }

 return brr
    
};