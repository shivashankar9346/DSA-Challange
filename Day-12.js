// 📊 Problem Statement:
// You are analyzing website traffic logs. 
// The array visits contains the number of users who visited the site on each day. 
// You are asked to find the maximum number of visitors in any k consecutive days.


let visits = [10, 20, 30, 40, 50, 60, 70]  
 let k = 3

function sumOftriplets(arr,k){
    let maxSum=0;
    for(let i=0;i<=arr.length-k;i++){
        let currentSum=0;
        for(let j=i;j<i+k;j++){
            currentSum+=arr[j]
        }
        maxSum=Math.max(maxSum,currentSum)
    }
    return maxSum;
}

console.log(sumOftriplets(visits,k));
