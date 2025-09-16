/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(arr) {
    console.log(arr);
    let obj={}
    for(let a=0;a<=arr.length-1;a++){
        if(obj[arr[a]]==undefined){
            obj[arr[a]]=1
        }else{
            obj[arr[a]]++
        }
    }
    console.log(obj);
    let ones=0,twos=0,minOnes=+Infinity,minTwos=+Infinity;
    for(let key in obj){
        if(key=="a"||key=="b"||key=="n"){
            ones++;
            if(obj[key]<minOnes){
                minOnes=obj[key]
            }
        }
        
        if(key=="o"||key=="l"){
            twos++
            if(obj[key]<minTwos){
                minTwos=obj[key]
            }
        }
    }
     console.log(ones,minOnes,twos,minTwos)
    if(ones==3 && twos==2){
        
        if((minOnes*2)<=minTwos){
            return minOnes
        }
        if((minOnes*2)>minTwos){
            console.log("dgah")
            return Math.floor(minTwos/2)
        }
        
        
    }else{
        return 0
    }
    
    
    // if(ones==)
    
   
};