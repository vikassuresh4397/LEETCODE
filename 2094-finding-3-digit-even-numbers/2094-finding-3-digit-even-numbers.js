/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(arr) {
    let crr=[]
    for(let a=0;a<=arr.length-1;a++){
          if(a==arr.length+1){
                        break
                    }
        for(let b=0;b<=arr.length-1;b++){
            if(b==a){
                b++
            }
              if(b==arr.length+1){
                        break
                    }
            for(let c=0;c<=arr.length-1;c++){
                if(c==b || c==a || a==b){
                    c++;
                    if(c==b || c==a || a==b){
                        c++
                    }
                    if(c==arr.length+1){
                        break
                    }
                }
                let x=""+arr[a]+arr[b]+arr[c];
                
                x=+x;
              crr.push(x);
             

               
                
            }
        }
    }
    

const cleanArray = crr.filter(item => !Number.isNaN(item));

// console.log(crr)

 let grr=[];

for(let a=0;a<=crr.length-1;a++){
    let y=crr[a]+"";
    if(y.length==3&&crr[a]%2==0){
        grr.push(+crr[a])
    }
}
  
console.log(grr)

let obj={};
for(let a=0;a<=grr.length-1;a++){
    if(obj[grr[a]]==undefined){
        obj[grr[a]]=1
    }
}
console.log(obj)
let drr=[];
for(let key in obj){
drr.push(+key);
}
drr.sort((a, b) => a - b);

return drr
};