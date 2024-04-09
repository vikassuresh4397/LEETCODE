/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(str, banned) {
    
const punch = ['.', ',', '!', '?', ';', ':', '-', '—', '(', ')', '[', ']', '{', '}', "'", '"', '/', '\\', '<', '>', '|', '@', '#', '$', '%', '^', '&', '*', '_', '+', '=', '~', '`'];
    
    // Replace punctuation marks with spaces
    for (let mark of punch) {
        str = str.split(mark).join(' ');
    }
//  console.log(str)
//   str = str.split('').filter(char => !punch.includes(char)).join('');
//   console.log(str)
  str=str.toLowerCase();
//   console.log("1",str)
  str=str.split(" ").filter(char=>!banned.includes(char)).join(" ");
//   console.log("2",str)
  let arr=str.split(" ");
  arr=arr.filter((el)=>el!=="");
//   console.log("Last",arr)
    // console.log(arr,"arr")
    // console.log(arr)
  let obj={}
  for(let a=0;a<=arr.length-1;a++){
      if(obj[arr[a]]==undefined){
          obj[arr[a]]=1
      }else{
          obj[arr[a]]++;
      }
  }
//   console.log(obj)
  
  let max=0,word;
  for(let key in obj){
      if(obj[key]>max){
          max=obj[key];
          word=key
      }
  }
  
  return word+""
};