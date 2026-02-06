/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(arr) {
    let count=0;
    for(let a=0;a<=arr.length-1;a++){
        let obj={};
        for(let b=a;b<=arr.length-1;b++){
            if(arr[b]=="a"||arr[b]=="e"||arr[b]=="i"||arr[b]=="o"||arr[b]=="u"){
                if(obj[arr[b]]==undefined){
                    obj[arr[b]]=1
                }else{
                    obj[arr[b]]++
                }
                 let rount=0
            for(let key in obj){
                rount++
            }
            if(rount==5){
                count++;
                // console.log(obj,rount)
            }
            }else{
                break;
            }
            // console.log(obj)
           
        }
       
        
    }
    return (count)
 
};