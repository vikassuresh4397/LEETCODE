/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(arr) {
    let obj={},max=0,bax=[];
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
             obj[arr[a]]++;
            
            // obj[arr[a]]++;
            // if()
        }
    }
    
    // console.log(obj);
    
    for(let key in obj){
        if(obj[key]>max){
            max=obj[key]
        }
    }
    
    for(let key in obj){
        if(max==obj[key]){
            bax.push(key)
        }
    }
    
    // console.log(bax);
    let srr=[]
    for(let a=0;a<=bax.length-1;a++){
        
        let bar=bax[a];
        let f=0,l=0,count=0,bount=0;
        for(let b=0;b<=arr.length-1;b++){
            if(arr[b]==bar && count==0){
                f=b+1;
                count++;
                // console.log("yes")
            }
            if(arr[arr.length-1-b]==bar && bount==0){
                l=arr.length-1-b+1;
                bount++
            }
        }
        // console.log(bar,l,f)
        srr.push(l-f+1)
    }
    
    srr.sort(function(a,b){
        return a-b
    })
    
    return srr[0]
    
};