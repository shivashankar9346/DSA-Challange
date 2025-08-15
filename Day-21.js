// ✅ Challenge: Longest Productive Streak

// 📈 Problem Statement:
// You’re building a productivity tracker
//  The user has a record of their daily productivity over the past few weeks. Each day is marked as:


 let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  
 let k = 2

 function longProductiveDays(days,k){
    let start =0;
    let maxLength=0;
    let zeroCount=0;

    for(let i = 0 ; i < days.length ; i++){
        if(days[i]===0){
            zeroCount++

        }
        
        while(zeroCount>k){
            if(days[start]===0){
                zeroCount--;
            }
            start++
        }
        maxLength=Math.max(maxLength,i-start+1)
    }
    return maxLength;

 }
 console.log(longProductiveDays(days,k));
 