/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort(function(a,b){
        return a-b
    });

    let obj={};
    let arr=[];
    for(let a=0;a<=nums.length-1;a++){
        if(obj[nums[a]]==undefined){
            obj[nums[a]]=1
        }else{
           arr.push(nums[a]);
           break
        }
    }

   
let count=0;
let last=nums[nums.length-1]
// console.log(nums.length);
// console.log(last)
if(nums.length==last+1){
    arr.push(last+1)
}else{
     let x=1;
    //  console.log(nums)
     for(let a=0;a<=nums.length-1;a++){
         
         if(nums.includes(x)){
              x++;
         }
       else{
            arr.push(x);
           
            break;
        }
    }
}
   

  
    
    return arr
};