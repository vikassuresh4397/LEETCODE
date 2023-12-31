/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(arr) {
    let obj={};
     for(let a=0;a<=arr.length-1;a++){
       if( obj[arr[a]]==undefined){
            obj[arr[a]]=[a]
       }else{
            obj[arr[a]].push(a)
       }
     }
    //  console.log(obj)
     let crr=[]
     for(let key in obj){
         if(obj[key].length>1){
             crr.push(obj[key])
         }
         
     };
     
    //  console.log(crr);
    
     if(crr.length==0){
         return -1
     }
     
     let grr=[]
     for(let a=0;a<=crr.length-1;a++){
         for(let b=0;b<=crr[a].length-2;b++){
             for(let c=b+1;c<=crr[a].length-1;c++){
                 let x=Math.abs(crr[a][c]-crr[a][b]);
                //  console.log(crr[a][c],crr[a][b],x)
                grr.push(x-1)
             }
         }
     };
     
     grr.sort(function(a,b){
         return a-b
     })
     return grr[grr.length-1]
     
     
    
};