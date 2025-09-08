/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
  
  let obj={};
  
  let z=Math.floor(n/2);
  console.log(z)
  
  for(let a=1;a<=z;a++){
      let x=a,y=n-a;
      let r=x+"",s=y+"";
      let count=0,bount=0;
      for(let b=0;b<=r.length-1;b++){
          if(r[b]=="0"){
              count++;
          }
      }
      
       for(let b=0;b<=s.length-1;b++){
          if(s[b]=="0"){
              bount++;
          }
      }
      
      if(count==0&&bount==0){
          return [x,y]
      }
  }
   
  
  
};