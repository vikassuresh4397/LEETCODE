/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(arr, k) {
    let obj={};
    
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=[a];
        }else{
            obj[arr[a]].push(a)
        }
    }
//   console.log(obj);
let brr=[];
for(let key in obj){
    if(obj[key].length>1){
         brr.push(obj[key])
    }
   
};
//   console.log(brr);

for(let a=0;a<=brr.length-1;a++){
    let c=0,b=brr[a].length-1;
    while(c!==brr[a].length-1){
        let x=Math.abs(brr[a][c]-brr[a][b]);
        // console.log(x,brr[a][c],brr[a][b])
        if(x<=k){
            return true
        }else if(x>k && c<b){
            b--;
            if(c==b){
            c++;
            b=brr[a].length-1
        }
        }else if(c==b){
            c++;
            b=brr[a].length-1
        }
    }
  
   
}

return false
    
};