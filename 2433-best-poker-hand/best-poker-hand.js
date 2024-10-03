/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
  
    let objRank={},arrRank=[],finalRank;   
    for(let a=0;a<=ranks.length-1;a++){
        if(objRank[ranks[a]]==undefined){
            objRank[ranks[a]]=1
        }else{
            objRank[ranks[a]]++;
        }
    }
    
    for(let key in objRank){
       arrRank.push([objRank[key],key]) 
    }
   
    arrRank.sort(function(a,b){
        return b[0]-a[0]
    })
    
    finalRank=arrRank[0][0]
   
    
     let objSuit={},arrSuit=[],finalSuit;   
    for(let a=0;a<=suits.length-1;a++){
        if(objSuit[suits[a]]==undefined){
            objSuit[suits[a]]=1
        }else{
            objSuit[suits[a]]++;
        }
    }
    
    for(let key in objSuit){
      arrSuit.push([objSuit[key],key])
    }
    arrSuit.sort(function(a,b){
        return b[0]-a[0]
    })
    
    finalSuit=arrSuit[0][0]

     
    
    if(finalRank>finalSuit){
      if(finalRank>=3){
        return "Three of a Kind"
      }else if(finalRank==2 && finalRank<3){
        return "Pair"
      }else{
        return "High Card"
      }
    }else if(finalRank<finalSuit){
      if(finalSuit>=5){
        return "Flush"
      }else  if(finalRank>=3){
        return "Three of a Kind"
      }else if(finalRank==2 && finalRank<3){
        return "Pair"
      }else{
        return "High Card"
      }
    }else if(finalRank==finalSuit){
      if(finalSuit>=5){
         return "Flush"
      }else if(finalRank==3){
         return "Three of a Kind"
      }else if(finalRank==2){
        return "Pair"
      }else{
        return "High Card"
      }
    }
    
    return "High Card"
    
    
};