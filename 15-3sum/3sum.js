/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = function(nums) {

let object={},count=0;

for(let a=0;a<=nums.length-1;a++){
   if(nums[a]==0){
       count++
   }
}

if(count==nums.length){
    return [[0,0,0]]
}


    nums.sort(function(a,b){
        return a-b
    })
    let arr = [];
    for(let a=0;a<=nums.length-3;a++){
           
        let b=a+1,c=nums.length-1;
         while(b<c){
                
             if(nums[a]+nums[b]+nums[c]==0){
             
                 arr.push([nums[a],nums[b],nums[c]]);
                 c--;
                 b++;
             }else if(nums[a]+nums[b]+nums[c]>=0){
                 c--
             }else{
                 b++
             }
         }
    }

    let obj={};
let brr=[];
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1;
            brr.push(arr[a])
        }
    }

    

 

    return brr
};