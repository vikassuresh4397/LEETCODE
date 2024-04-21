/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(arr, distance) {
    let obj={};
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=[a]
        }else{
            obj[arr[a]].push(a)
        }
    };
    
    let brr=[];
    let char="abcdefghijklmnopqrstuvwxyz";
    // console.log(obj);
    for(let key in obj){
        brr.push([key,obj[key][1]-obj[key][0]-1])
    }
    brr.sort()
    // console.log(brr);
    let c=0;
    // console.log(brr[0][1])
    // console.log(arr[]);
    let obj1={}
    for(let a=0;a<=brr.length-1;a++){
        if(obj1[brr[a][0]]==undefined){
            obj1[brr[a][0]]=[brr[a][1]]
        }
    }
    // console.log(obj1)
    for(let a=0;a<=char.length-1;a++){
        if(obj1[char[a]]==undefined){
            continue;
        }else{
            obj1[char[a]].push(distance[a])
        }
    }
    // console.log(obj1);
    let crr=[]
    for(let key in obj1){
        crr.push([key,obj1[key]])
    }
    // console.log(crr)
    // console.log(crr[0][1][1],crr[0][1][0],"dgadb")
    for(let a=0;a<=crr.length-1;a++){
        if(crr[a][1][1]-crr[a][1][0]==0){
            continue;
        }else{
            return false
        }
        //  console.log(crr[a][1][1],crr[a][1][0],"dgadb")
    }
    
    return true
    
  console.log(crr)
    
};