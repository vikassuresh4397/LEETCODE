/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let brr=[];
    for(let a=0;a<=nums.length-1;a++){
        let y=nums[a];
        // console.log(y)
        let x=""+nums[a],sum=0;
        for(let b=0;b<=x.length-1;b++){
            sum=sum+Number(x[b])
        }
        if(sum<y){
            brr.push(sum)
        }else{
            brr.push(y)
        }
    }
    nums=[];
    //  console.log(brr)
     for(let a=0;a<=brr.length-1;a++){
         nums.push(brr[a])
     }
    //  console.log(nums)
      nums.sort(function(a,b){
          return a-b
      })
    
    return nums[0]
};