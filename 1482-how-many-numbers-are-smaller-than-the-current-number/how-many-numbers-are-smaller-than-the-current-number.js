/**
 * @param {number[]} nums
 * @return {number[]}
 */



var smallerNumbersThanCurrent = function(grr) {
    let arr=[]
    for(let a=0;a<=grr.length-1;a++){
        arr.push(grr[a])
    }
    arr.sort(function(a,b){
        return a-b
    })
    
    let a=0,b=a+1,count=0,brr=[];
    // console.log(arr);
    
    for(let a=0;a<=arr.length-1;a++){
        if(a==0){
            brr.push([arr[a],count]);
            // console.log("yes")
        }else{
            brr.push([arr[a],count]);
            //  console.log("no")
        }
        count++;
       
    }
    // console.log(brr);
    
    let obj={},krr=[];
    
    for(let a=0;a<=brr.length-1;a++){
        if(obj[brr[a][0]]==undefined){
            obj[brr[a][0]]=brr[a][1];
            krr.push([brr[a][0],brr[a][1]])
        }
    }
    // console.log(obj);
    let yrr=[]
    for(let a=0;a<=grr.length-1;a++){
        if(obj[grr[a]]==undefined){
            continue;
        }else{
            yrr.push(obj[grr[a]])
        }
    }
  return yrr

    
 
};