/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let count=0;
    for(let key in obj){
        count++
    }

    if(count!==0){
        return false
    }else{
        return true
    }
};