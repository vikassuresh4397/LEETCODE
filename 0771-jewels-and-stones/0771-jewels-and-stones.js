/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let obj={};
    
    for(let a=0;a<=jewels.length-1;a++){
        if(obj[jewels[a]]==undefined){
            obj[jewels[a]]=1
        }else{
            obj[jewels[a]]++
        }
    }
    
    // console.log("obj1",obj);
    let bount=0
    for(let a=0;a<=stones.length-1;a++){
        if(obj[stones[a]]!==undefined){
          bount=bount+1
        }else{
            continue;
        }
    }
    //  console.log("obj2",obj)
    
    // let count=0;
    
    // for(let key in obj){
    //     count=count+obj[key]
    // }
    return bount
};