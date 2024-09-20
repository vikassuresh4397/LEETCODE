/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(arr) {
    let year="",month="",day="";
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]=="-"){
            break;
        }
        
        year=year+arr[a]
    }
    // console.log(year);
    let count=0;
    let first,second;
    for(let a=0;a<=arr.length-1;a++){
        if(arr[a]=="-" && count==0){
            count++;
            first=a;
        }
        if(arr[a]=="-" && count==1){
            second=a
        }
    }
    
    for(let a=first+1;a<second;a++){
        month=month+arr[a]
    }
    month=Math.ceil(month)
    year=Math.ceil(year)
    
    for(let a=second+1;a<=arr.length-1;a++){
        day=day+arr[a]
    }
    day=Math.ceil(day);
    // console.log(first,second,month,year,day);
    
    let leap1=year%4;
    let leap2=year%400;
    let leap3=year%100;
    let bount=0
    
    if(leap1==0){
        if(leap3==0){
        if(leap2==0){
            bount++
        }
    } 
        if(leap3!==0 && leap2!==0){
            bount++
        }
        
        if(leap3==0 && leap2!==0){
            bount=0
        }
    }
   
    
   
    
    if(bount>=1){
      let monthdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let totaldays=day;
      for(let a=0;a<=month-2;a++){
          totaldays=totaldays+monthdays[a]
      }
       return (totaldays)
    }else{
        let monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let totaldays=day;
      
      for(let a=0;a<=month-2;a++){
          totaldays=totaldays+monthdays[a]
      }
      return (totaldays)
    }
    
    
};