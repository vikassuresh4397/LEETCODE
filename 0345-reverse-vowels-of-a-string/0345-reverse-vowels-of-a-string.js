/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(arr) {
    //  console.log(arr)
    arr=arr.split("");
    // console.log(arr)
    let l=arr.length-1,f=0;
    // arr[1]=1
  
    let obj={};
    
    for(let a=0;a<=arr.length-1;a++){
        if(obj[a]==undefined){
            if(arr[a]=="a"||arr[a]=="e"||arr[a]=="i"||arr[a]=="o"||arr[a]=="u"||arr[a]=="A"||arr[a]=="E"||arr[a]=="I"||arr[a]=="O"||arr[a]=="U"){
                obj[a]=arr[a]
            }else{
                continue;
            }
            
        }
    }
    // console.log(obj)
    
    let brr=[];
    for(let key in obj){
        brr.push([key,obj[key]])
    }
    // console.log(brr)
  let crr=[]
  for(let a=0;a<=brr.length-1;a++){
      crr.push([brr[a][0],brr[brr.length-1-a][1]])
  }
    // console.log(crr);
    
  for(let a=0;a<=crr.length-1;a++){
      arr[crr[a][0]]=crr[a][1];
   
  }
  
  return arr.join("")
   
  // console.log(arr)
    
};