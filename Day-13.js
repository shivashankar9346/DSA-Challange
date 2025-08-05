// 📈 Problem Statement:
// You’re building a productivity tracker app. The user’s daily productivity over the past few weeks is stored in an array:

// 1 (productive day)

// 0 (unproductive day)

// You are allowed to flip up to k unproductive (0) days into productive days.
// Your task is to find the maximum length of a productive streak possible after at most k flips.



let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  
 let k = 2

 function lengthOfProductiveDays(days,k){
    let maxlength=0;
    for(let i=0;i<days.length;i++){
        let zeroCount=0;
        for(let j=i;j<days.length;j++){
            if(days[j]===0){
                zeroCount++
            }
            if(zeroCount<=k){
                let currentLength=j-i+1;
                maxlength=Math.max(maxlength,currentLength)
            }else{
                break
            }
        }
    }
    return maxlength;
 }
 console.log(lengthOfProductiveDays(days,k));
 
