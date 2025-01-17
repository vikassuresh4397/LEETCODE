var frequencySort = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
    // console.log("obj",obj);
    let crr=[];
    for(let key in obj){
        crr.push([+key,+obj[key]])
    }
    // console.log("crr",crr);
    
    let obj1={};
    for(let a=0;a<=crr.length-1;a++){
        if(obj1[crr[a][1]]==undefined){
            obj1[crr[a][1]]=[crr[a][0]]
        }else{
            obj1[crr[a][1]].push(+crr[a][0])
        }
    }
    // console.log("obj1",obj1);
    
    let drr=[];
    for(let key in obj1){
        drr.push([obj1[key].sort(function(a,b){
            return b-a
        }),+key])
    }
    // console.log("drr",drr);
    
    let mrr=[],obj2={};
    for(let a=0;a<=drr.length-1;a++){
       if(obj2[drr[a][1]]==undefined){
           obj2[drr[a][1]]=drr[a][0]
       }
    }
    // console.log("obj2",obj2);
    for(let key in obj2){
        for(let a=0;a<=obj2[key].length-1;a++){
            for(let b=1;b<=key;b++){
                mrr.push(obj2[key][a])
            }
        }
    }
   return (mrr)
    
};