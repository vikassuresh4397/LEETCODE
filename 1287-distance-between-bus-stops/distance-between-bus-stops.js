/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(arr, start, destination) {
    let sum=0;
    for(let a=0;a<=arr.length-1;a++){
        sum=sum+arr[a]
    }
    let rum=0;
    
    if(start<destination){
          for(let a=start;a<destination;a++){
        rum=rum+arr[a]
    }
    
    let diff=sum-rum;
    if(rum>diff){
        return diff
    }else{
        return rum
    }
    }else{
       
        
        
          for(let a=destination;a<start;a++){
        rum=rum+arr[a]
    }
    
    let diff=sum-rum;
    if(rum>diff){
        return diff
    }else{
        return rum
    }
        
        
        
        
        
        
        
    }
  
    
};