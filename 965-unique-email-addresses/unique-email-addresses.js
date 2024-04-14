/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(arr) {
    let grr=[];
    for(let a=0;a<=arr.length-1;a++){
        let domain="";
        let local=""
        let brr=arr[a]
        for(let b=0;b<=brr.length-1;b++){
            if(brr[brr.length-1-b]=="@"){
                  domain=brr[brr.length-1-b]+domain;
                break;
            }else{
                domain=brr[brr.length-1-b]+domain;
            }
        }
        
        for(let b=0;b<=brr.length-1;b++){
           if(brr[b]=="@"){
                break;
            } else if(brr[b]=="+"){
                 break;
            }else if(brr[b]=="."){
                 continue;    
                     }
            else{
                local=local+brr[b]
            }
        }
        
        grr.push(local+domain)
       
    }
    // console.log(grr);
    
    let obj={};
    for(let a=0;a<=grr.length-1;a++){
        if(obj[grr[a]]==undefined){
            obj[grr[a]]=1
        }else{
            obj[grr[a]]++
        }
    }
    
    let bount=0;
    for(let key in obj){
        bount=bount+1
    }
    
    return bount
}