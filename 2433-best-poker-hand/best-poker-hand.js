/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let result=[[5,"Flush"],[3,"Three of a Kind"],[2,"Pair"],[1,"High Card"]];
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
    // console.log(objRank,arrRank)
    arrRank.sort(function(a,b){
        return b[0]-a[0]
    })
    
    finalRank=arrRank[0][0]
    // console.log(objRank,arrRank,finalRank)
    
     let objSuit={},arrSuit=[],finalSuit;   
    for(let a=0;a<=suits.length-1;a++){
        if(objSuit[suits[a]]==undefined){
            objSuit[suits[a]]=1
        }else{
            objSuit[suits[a]]++;
        }
    }
    // console.log(objSuit)
    for(let key in objSuit){
      arrSuit.push([objSuit[key],key])
    }
    arrSuit.sort(function(a,b){
        return b[0]-a[0]
    })
    
    finalSuit=arrSuit[0][0]
    // console.log(objSuit,arrSuit,finalSuit);
    
//   "Flush": Five cards of the same suit.
// "Three of a Kind": Three cards of the same rank.
// "Pair": Two cards of the same rank.
// "High Card": Any single card.
     
    
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