/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(arr, left, right) {
    let total=0
    for(let a=left;a<=right;a++){
        let count=0
        if(arr[a][0]=="a"||arr[a][0]=="e"||arr[a][0]=="i"||arr[a][0]=="o"||arr[a][0]=="u"){
            count++
        }
        
         if(arr[a][arr[a].length-1]=="a"||arr[a][arr[a].length-1]=="e"||arr[a][arr[a].length-1]=="i"||arr[a][arr[a].length-1]=="o"||arr[a][arr[a].length-1]=="u"){
            count++
        }
        
        if(count==2){
            total++
        }
    }
    return total
};