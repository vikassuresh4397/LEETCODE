/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let obj={};
    for(let a=0;a<=num.length-1;a++){
        if(obj[a]==undefined){
            obj[a]=num[a]
        }
    }
    let bount=0;
    for(let key in obj){
        let count=0;
         for(let a=0;a<=num.length-1;a++){
             if(key==num[a]){
                 count++;
             }
         }
         
         if(count==obj[key]){
             bount++;
         }else{
             return false
         }
    }
    
    return true
    // console.log(obj)
};