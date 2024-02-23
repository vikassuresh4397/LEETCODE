/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(arr) {
    let x=arr.length*arr[0].length;
    // console.log("x",x)
    let obj={}
    for(let a=1;a<=x;a++){
        if(obj[a]==undefined){
            obj[a]=1
        }
    }
    // console.log("obj",obj)
    let miss=[]
    for(let a=0;a<=arr.length-1;a++){
        for(let b=0;b<=arr[a].length-1;b++){
            if(!obj[arr[a][b]]==undefined){
                miss.push(arr[a][b])
            }else{
                obj[arr[a][b]]--
            }
        }
    }
    //  console.log("newobj",obj);
    //   console.log("miss",miss)
    let repeated=[]
    for(let key in obj){
        if(obj[key]<0){
            repeated.push(+key)
        }
        
        if(obj[key]>0){
            miss.push(+key)
        }
    }
    
    //  console.log("repe",repeated)
    return [...repeated,...miss]
};