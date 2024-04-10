/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(str) {
    str=str.toLowerCase();
    let arr=str.split(" ")
    // console.log(str,arr);
    
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a].length>=3){
              arr[a] = arr[a][0].toUpperCase() + arr[a].slice(1);
            // console.log(arr[a][0])
        }
    }
    // arr[0]=1;
    //  console.log(str,arr);
    return arr.join(" ")
};