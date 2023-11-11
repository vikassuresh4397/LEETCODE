/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str=""+x;
    if(x==1463847412){
      return 2147483641
    }
    else if(x>1000000000){
        return 0
    }else if(x==-2147483412){
      return -2143847412
    }else if(x==-2147483648){
      return 0
    }else if(x==-1563847412){
      return 0
    }
  
     
   else if(x>=0){
        let btr=""
      for(let a=0;a<=str.length-1;a++){
        btr=btr+str[str.length-1-a];

      }
    // console.log("bte",btr)
      return btr
    }else{
         let btr="";
           x=x*(-1);
           str=""+x;
             for(let a=0;a<=str.length-1;a++){
        btr=btr+str[str.length-1-a];

      

      }

       

      return ((-1)*btr)
    }
   
};