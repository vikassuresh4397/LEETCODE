/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(arr) {
    let count = 1, brr = [];
    if(arr.length==0){
        return ""
    }else if(arr.length==1){
        let x=1;
        let y=arr[0];
        let z=x+y;
        return z
    }
    for (let a = 1; a <= arr.length - 1; a++) {
        
        if (arr[a] == arr[a - 1] && count < 9) {
            if (a == arr.length - 1) {
                count++;
                // console.log("2222221111")
                brr.push(count, arr[a]);
            } else {
                count++;
                if (count >= 10) {
                    // console.log("1111111111")
                     brr.push(count-1, arr[a]);
                    count = 1;
                }
                
            }
        } else {
            // console.log("3333",arr[a-1],count)
            if(a==arr.length-1){
                 brr.push(count, arr[a - 1]);
            count = 1;
            brr.push(count,arr[a])
            }else{
                 brr.push(count, arr[a - 1]);
            count = 1;
            }
           
        }
    }

    return (brr.join(""));
};