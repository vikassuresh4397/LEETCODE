/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(arr,k) {
    let m,bount=0;
    
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]==k){
            m=k;
            bount++
            break
        }
    }
      if(bount==0){
        return k
    }
    m=m*2;
    return wow(arr,m)
    function wow(arr,m){
        for(let a=0;a<=arr.length-1;a++){
            if(arr[a]==m){
                 m=m*2;
                 return wow(arr,m)
            }
        }
        
                return m
        
    }
    
  
};