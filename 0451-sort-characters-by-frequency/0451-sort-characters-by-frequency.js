/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(arr) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++;
        }
    }
    // console.log("ob",obj)
    let brr=[];
    
    for(let key in obj){
        brr.push([key,obj[key]])
    }
    
    brr.sort(function(a,b){
        return b[1]-a[1]
    });
    // console.log(brr,"boom")
    let crr=[];
    
    for(let a=0;a<=brr.length-1;a++){
        if(brr[a][1]>=2){
            for(let b=0;b<brr[a][1];b++){
                crr.push(brr[a][0])
            }
        }else{
            crr.push(brr[a][0])
        }
        
    };
    // console.log(crr);
    let s="";
    
    for(let a=0;a<=crr.length-1;a++){
        s=s+crr[a];
    }
    return s
};