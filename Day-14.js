// Problem Statement:
// You are working on a website analytics dashboard. 
// You receive hourly visitor counts for a website as an array visitors[], 
// where each element represents the number of users visiting the site in that hour.

// Your task is to find the minimum number of visitors in any k consecutive hours.
let  visitors = [120, 80, 100, 90, 150, 110, 70]
let  k = 3 

function minSumofTriplets(visitors,k){
    let minSum=Infinity;
    for(let i=0;i<=visitors.length-k;i++){
        let currentSum=0;
        for(let j=i;j<i+k;j++){
            currentSum+=visitors[j]
        }
        minSum=Math.min(minSum,currentSum)
    }
    return minSum
}
console.log(minSumofTriplets(visitors,k))