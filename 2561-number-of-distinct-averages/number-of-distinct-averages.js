/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
  let max=-Infinity;
  let min=Infinity;

  nums.sort(function(a,b){
      return a-b
  })

  let x=nums.length/2;
  let y=x-1;
  let brr=[];
  for(let a=0;a<=y;a++){
     let sum=nums[a]+nums[nums.length-1-a];
     let avg=sum/2;
     brr.push(avg)
  }
let obj={},count=0;
  for(let a=0;a<=brr.length-1;a++){
      if(obj[brr[a]]==undefined){
         obj[brr[a]]=1 ;
         count++
      }
  }

  return count


};