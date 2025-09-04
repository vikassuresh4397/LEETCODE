/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let a,b;
    if(x>=0 && z>=0){
        a=Math.abs(z-x);
    }else if(x<0 && z<0){
        a=Math.abs(z-x);
    }else if(x>=0 && z<0){
       a=(-1*z)+x
    }else if(x<0 && z>=0){
        a=(-1*x)+z
    }
    
    if(y>=0 && z>=0){
        b=Math.abs(z-y);
    }else if(y<0 && z<0){
        b=Math.abs(z-y);
    }else if(y>=0 && z<0){
       b=(-1*z)+y
    }else if(y<0 && z>=0){
        b=(-1*y)+z
    }
    
    if(a>b){
        return 2
    }else if(a<b){
        return 1
    }else{
        return 0
    }
    
};