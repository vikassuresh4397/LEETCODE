/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let x=1,y=area,max=+Infinity,r=1,s=area,count=0;
    
    for(let a=2;a<=area-1/2;a++){
        if(area%a==0){
            count++
            x=a;
            y=area/a;
           if(y-x<max && max>0){
               
               max=y-x
               // console.log(max)
               r=x;
               s=y
           }
        }
    }
    
    if(count==0){
        return [s,r]
    }
    
    return [r,s]
};