/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    let rount=0

    if(needle.length>haystack.length){
        return -1
    }else if(needle.length==1 && haystack.length==1){
         if(needle[0]==haystack[0]){
             return 0
         }
    }else if(needle.length==1){
       for(let a=0;a<=0;a++){
    for(let b=0;b<=haystack.length-1;b++){
        if(needle[a]==haystack[b]){
            return b
        }
    }
       }
    }
for(let a=0;a<=0;a++){
    for(let b=0;b<=haystack.length-1;b++){
        if(needle[a]==haystack[b]){
            //  console.log(needle[a],"..............");
             rount=0;
            for(let c=1;c<=needle.length-1;c++){
                if(needle[c]==haystack[b+c]){
                    
                  rount++;
                //   console.log(needle[c],rount)
                   if(rount+1==needle.length && c==needle.length-1){
                return b
            }
                  
                  
                }else{
                    rount=0
                    break;
                }
            }

           
        }
    }
}

return (-1)
};