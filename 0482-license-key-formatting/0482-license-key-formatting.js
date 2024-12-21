/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(arr,k) {
    let crr=[];
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]!=="-"){
            crr.push(arr[a])
        }
    }
    // console.log(crr);
    let drr=[],count=0;
    for(let a=crr.length-1;a>=0;a--){
        if(count%k==0 && count!==0){
             drr.push("-")
           
        }
            drr.push(crr[a].toUpperCase());
        
       
        count++;
        
    }
    // console.log(drr,"ddddddd");
    let trr=[],bount=0;
    for(let a=drr.length-1;a>=0;a--){
        // if(bount%4==0 && bount!==0){
        //     trr.push("-")
        // }
        trr.push(drr[a]);
        bount++
    }
    
  return (trr.join(""))
};