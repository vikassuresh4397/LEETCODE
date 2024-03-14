/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num%2==0){
        let x=num/2;
        let arr=[]
        for(let a=1;a<=x;a++){
            if(num%a==0){
                arr.push(a)
            }
        }
        
        let sum=0;
        for(let a=0;a<=arr.length-1;a++){
            sum=sum+arr[a]
        }
        if(sum==num){
            return true
        }else{
            return false
        }
        
    }else{
          let x=(num-1)/2;
        let arr=[]
        for(let a=1;a<=x;a++){
            if(num%a==0){
                arr.push(a)
            }
        }
          let sum=0;
        for(let a=0;a<=arr.length-1;a++){
            sum=sum+arr[a]
        }
          if(sum==num){
            return true
        }else{
            return false
        }
    }
};