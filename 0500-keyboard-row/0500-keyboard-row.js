/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (arr) {
    console.log("arrr")
  let brr = [];
  for (let a = 0; a <= arr.length - 1; a++) {
    let grr = [];
    for (let b = 0; b <= arr[a].length - 1; b++) {
     if (
    arr[a][b] == "q" || arr[a][b] == "w" || arr[a][b] == "e" || arr[a][b] == "r" || 
    arr[a][b] == "t" || arr[a][b] == "y" || arr[a][b] == "u" || arr[a][b] == "i" || 
    arr[a][b] == "o" || arr[a][b] == "p" || 
    arr[a][b] == "Q" || arr[a][b] == "W" || arr[a][b] == "E" || arr[a][b] == "R" || 
    arr[a][b] == "T" || arr[a][b] == "Y" || arr[a][b] == "U" || arr[a][b] == "I" || 
    arr[a][b] == "O" || arr[a][b] == "P"
) {
    grr.push(1);
} else if (
    arr[a][b] == "a" || arr[a][b] == "s" || arr[a][b] == "d" || arr[a][b] == "f" || 
    arr[a][b] == "g" || arr[a][b] == "h" || arr[a][b] == "j" || arr[a][b] == "k" || 
    arr[a][b] == "l" || 
    arr[a][b] == "A" || arr[a][b] == "S" || arr[a][b] == "D" || arr[a][b] == "F" || 
    arr[a][b] == "G" || arr[a][b] == "H" || arr[a][b] == "J" || arr[a][b] == "K" || 
    arr[a][b] == "L"
) {
    grr.push(2);
} else if (
    arr[a][b] == "z" || arr[a][b] == "x" || arr[a][b] == "c" || arr[a][b] == "v" || 
    arr[a][b] == "b" || arr[a][b] == "n" || arr[a][b] == "m" || 
    arr[a][b] == "Z" || arr[a][b] == "X" || arr[a][b] == "C" || arr[a][b] == "V" || 
    arr[a][b] == "B" || arr[a][b] == "N" || arr[a][b] == "M"
) {
    grr.push(3);
}
      
     
    }
     brr.push(grr)
  }
  console.log("brr",brr)
  let crr=[]
  for(let a=0;a<=brr.length-1;a++){
      let count=0
      for(let b=0;b<=brr[a].length-1;b++){
          if(brr[a].length==1){
              crr.push(a);
              console.log("ewetw")
              count++
              break;
          }
          if(brr[a][b]!==brr[a][b+1] && b!=brr[a].length-1){
              count++;
              console.log(brr[a][b],brr[a][b+1],"sfaegaehaeh")
              break;
               
          }
      }
      
      if(count==0){
          crr.push(a)
      }
      
      
    
  }
  
  console.log(crr);
  let drr=[]
  for(let a=0;a<=crr.length-1;a++){
      drr.push(arr[crr[a]])
  }
  return (drr)
  
};