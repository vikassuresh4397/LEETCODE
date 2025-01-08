/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(arr) {
    let obj={},obj1={};
    for(let a=0;a<=arr.length-1;a++){
         a++
        if(obj[arr[a]]==undefined){
            
            
            
            obj[arr[a]]=[arr[a-1]];
            if(arr[a-1]=="G"){
                obj1[arr[a]]=[7]
            }else if(arr[a-1]=="R"){
                 obj1[arr[a]]=[5]
            }else if(arr[a-1]=="B"){
                 obj1[arr[a]]=[2]
            }
        }else{
            obj[arr[a]].push(arr[a-1]);
            let x=obj1[arr[a]].pop();
            obj1[arr[a]].pop()
            if(arr[a-1]=="G"){
                let y=x*7
                obj1[arr[a]].push(y)
            }else if(arr[a-1]=="R"){
                  let y=x*5
                obj1[arr[a]].push(y)
            }else if(arr[a-1]=="B"){
                 let y=x*2
                obj1[arr[a]].push(y)
            }
        }
        
       
        
    }
    // console.log(obj,obj1);
    let count=0;
    for(let key in obj1){
        if(obj1[key]%70==0){
            count++
        }
    }
    
    return count
    
    
};