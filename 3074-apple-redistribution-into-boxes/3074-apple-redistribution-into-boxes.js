/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let count=0;
    for(let a=0;a<=apple.length-1;a++){
        count=count+apple[a]
    }
    
    capacity.sort(function(a,b){
        return b-a
    });
    let bount=0
    for(let a=0;a<=capacity.length-1;a++){
        count=count-capacity[a];
        bount++;
        if(count<=0){
            return bount
        }
    }
    
    return bount
};