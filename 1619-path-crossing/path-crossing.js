/**
 * @param {string} path
 * @return {boolean}
 */

var isPathCrossing = function(path) {
    let arr=[[0,0]],x=0,y=0;
    for(let a=0;a<=path.length-1;a++){
        if(path[a]=="N"){
          
            y++;
           
            arr.push([x,y]);
        }else if(path[a]=="S"){
             
            y--;
           
            arr.push([x,y]);
        }else if(path[a]=="E"){
              x++;
           
            arr.push([x,y]);
           
        }else if(path[a]=="W"){
              x--;
           
            arr.push([x,y]);
           
        }
    }
// console.log(arr)
    let obj1={};

    for(let a=0;a<=arr.length-1;a++){
        if(obj1[arr[a]]==undefined){
            obj1[arr[a]]=1
        }else{
            obj1[arr[a]]++;
           
            return true
        }
    }

    

    return false
};
