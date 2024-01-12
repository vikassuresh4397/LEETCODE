/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(str) {
    x=str.length/2-1,count=0;
     
    for(let a=0;a<=x;a++){
        if(str[a]=="a"||str[a]=="e"||str[a]=="i"||str[a]=="o"||str[a]=="u"||str[a]=="A"||str[a]=="E"||str[a]=="I"||str[a]=="O"||str[a]=="U"){
            count++;
        }
    }


    for(let a=x+1;a<=str.length-1;a++){
         if(str[a]=="a"||str[a]=="e"||str[a]=="i"||str[a]=="o"||str[a]=="u"||str[a]=="A"||str[a]=="E"||str[a]=="I"||str[a]=="O"||str[a]=="U"){
            count--;
        }
    }

    if(count==0){
        return true
    }else{
        return false
    }
};