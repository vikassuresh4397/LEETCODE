/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(arr) {
    
    let winobj={},looseobj={};

    for(let a=0;a<=arr.length-1;a++){
        if(winobj[arr[a][0]]==undefined){
           winobj[arr[a][0]]=1; 
        }else{
            winobj[arr[a][0]]++
        }

       if(looseobj[arr[a][1]]==undefined){
           looseobj[arr[a][1]]=1; 
        }else{
            looseobj[arr[a][1]]++
        }
        
    };
    
//     console.log("winobj",winobj)
// console.log("looseobj",looseobj)
    let winarr=[],loosearr=[];

    for(let key in winobj){
      if(looseobj[key]==undefined){
        //   console.log("wow",looseobj[key],key)
          winarr.push(+key)
      }else{
          if(looseobj[key]==1){
              loosearr.push(+key)
          }
      }  
    };
    
    for(let key in looseobj){
        if(looseobj[key]==1){
            loosearr.push(+key)
        }
    }
    
    let obj={};
    
    for(let a=0;a<=loosearr.length-1;a++){
        if(obj[loosearr[a]]==undefined){
            obj[loosearr[a]]=1
        }
    }
    
    let newlooser=[];
    
    for(let key in obj){
        newlooser.push(+key)
    }
    
    
    
    // console.log("winarr",winarr);
    //  console.log("loosearr",loosearr);

    winarr.sort(function(a,b){
        return a-b
    });

    newlooser.sort(function(a,b){
        return a-b
    });

    return [winarr,newlooser]

};