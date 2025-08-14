 let visitors = [120, 80, 100, 90, 150, 110, 70]  
 let k = 3

 function minSumofTriplets(visitors,k){
    let windowSum=0;

    for(let i=0;i<k; i++){
        windowSum +=visitors[i]
    }

    let minSum =windowSum;

    for(let i=k;i<visitors.length;i++){
        windowSum= windowSum- visitors[i-k]+visitors[i]
        minSum=Math.min(minSum,windowSum)
    }
    return minSum
 }
 console.log(minSumofTriplets(visitors,k));
 