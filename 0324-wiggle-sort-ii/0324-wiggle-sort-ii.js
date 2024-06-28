/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
   nums.sort(function(a,b){
       return a-b
   }) 
   
   if(nums.length%2==0){
        let x=Math.floor(nums.length/2);
   let brr=[],crr=[],grr=[]
   for(let a=0;a<x;a++){
       brr.push((nums[nums.length-1-a]));
       crr.push(nums[a])
   }
   crr.sort(function(a,b){
       return b-a
   })
//   console.log(brr,crr);
   for(let a=0;a<=brr.length-1;a++){
       grr.push(crr[a]);
        grr.push(brr[a])
   }
   for(let a=0;a<=grr.length-1;a++){
       nums[a]=grr[a]
   }
   return nums
   }else{
       let x=Math.ceil(nums.length/2);
       let brr=[],crr=[],grr=[];
       for(let a=0;a<=x-1;a++){
           crr.push(nums[a])
       }
        crr.sort(function(a,b){
       return b-a
   })
       let y=nums.length-x;
        for(let a=0;a<=y-1;a++){
           brr.push(nums[nums.length-1-a])
       }
       for(let a=0;a<=brr.length-1;a++){
       grr.push(crr[a]);
        grr.push(brr[a])
   }
    grr.push(crr[crr.length-1])
   for(let a=0;a<=grr.length-1;a++){
       nums[a]=grr[a]
   }
  
//   console.log(crr,brr)
   return nums
      
   }
  
   
};