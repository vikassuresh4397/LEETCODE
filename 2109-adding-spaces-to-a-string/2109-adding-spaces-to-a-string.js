/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(str, spaces) {
    let obj={};
    for(let a=0;a<=str.length-1;a++){
        if(obj[a]==undefined){
            obj[a]=str[a]
        }
    };
    //   console.log(obj);
    for(let a=0;a<=spaces.length-1;a++){
         obj[spaces[a]]=" "+obj[spaces[a]]
    }
    
    //  console.log(obj);
    let x=""
    for(let key in obj){
        x=x+obj[key]
    }
    
    let y=0;
    spaces.sort(function(a,b){
        return a-b;
    })
    
    if(spaces[0]==y){
        return ""+x
    }
    
    
    
    return x.trim("")
    
    // obj[spaces[0]]=" "+obj[spaces[0]]
    // obj["9"]="uuu"
    
    //  console.log(obj);
    
  
};