/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let vowel="abcdefghijklmnopqrstuvwxyz";
    let obj={},count=1;
    for(let a=0;a<=vowel.length-1;a++){
        if(obj[vowel[a]]==undefined){
            obj[vowel[a]]=count++;
        }
    }
    let brr=[]
    for(let a=0;a<=letters.length-1;a++){
        if(obj[letters[a]]!==undefined){
            brr.push(obj[letters[a]])
        }
    }
    let final;
    for(let key in obj){
        if(key==target){
            //  console.log(final,"11111111111sgsdb")
            final=obj[key]
        }
    }
    // console.log(final,"sgsdb")
    // console.log(brr)
    brr.sort(function(a,b){
        return a-b
    })
    //  console.log(brr);
     
     if(target=="z"){
         return letters[0]
     }
     let score,bolt=0;
     for(let a=0;a<=brr.length-1;a++){
         if(brr[a]>final){
             score=brr[a];
             bolt++;
             break
         }
     }
     
     if(bolt==0){
         return letters[0]
     }
     for(let key in obj){
         if(obj[key]==score){
             return key
         }
     }
     
     
     // console.log(score);
     
   
    
    
};

