/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(arr) {

    let obj={};
    for(let a=0;a<=arr.length-1;a++){
       if(obj[arr[a]]==undefined){
           obj[arr[a]]=1
       }else{
           obj[arr[a]]++;
       }
    };
    // console.log(obj)
let brr=[]
    for(let key in obj){
        if(obj[key]==1 && obj[key]%2!==0){
            return -1
        }else{
            brr.push(obj[key])
        }
    }
    let count=0;
    for(let a=0;a<=brr.length-1;a++){
        if(brr[a]%3==0){
             let b=brr[a]/3;
                count=count+b;
        }
        else if(brr[a]%2!==0){
          let w=brr[a]-2;
          let u=brr[a]-4;
          
          if(w%3==0){
              let p=w/3;
              count=count+p+1
          }else{
              let q=u/3;
              count=count+q+2
          }
        }
        else if(brr[a]%2==0){
            // console.log("brr[a]",brr[a]);
            let r=brr[a]
            let k=r-2;
            let l=r-4;
            // console.log(k,l)
            if(l%3==0){
                let m=l/3;
                // console.log("m",m)
                count=count+2+m
            }else if(k%3==0){
                 let n=k/3;
                //  console.log("n",n)
                count=count+1+n
            }
            // let x=brr[a]/2;
            // count=count+x;
        }
    }

    // console.log(brr);
    return count


};