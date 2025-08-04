// 🔥 Challenge: Find All Unique Triplets That Sum to Zero
// Problem Statement:
// You’re building a feature for a finance dashboard that analyzes daily profit/loss patterns. You're given an array of integers representing daily net changes.
// Your task is to find all unique triplets (i, j, k) such that:
// arr[i] + arr[j] + arr[k] == 0  and i != j != k


// arr = [-1, 0, 1, 2, -1, -4]
// function SumOfTriplets(arr){
//      let result=[]
//          let seen = new Set();
//     for(let i=0;i<arr.length-2;i++){
//     for(j=i+1;j<arr.length-1;j++){
//         for(k=j+1;k<arr.length;k++){
//             if(arr[i]+arr[j]+arr[k]===0){
//               let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
//               let key = triplet.join(',');

//              if(!seen.has(key)){
//                 seen.add(key);
//                 result.push(triplet)
//              }
//             }
//         }
//     }
// }
//     return result
// }
// console.log(SumOfTriplets(arr));   //time complexity -O(n)**3


 


arr = [-1, 0, 1, 2, -1, -4]
function SumOfTriplets(arr){
    let result=[];
    arr.sort((a,b)=>a-b)
    for(i=0;i<arr.length-2;i++){
        if(i>0&&arr[i]===arr[i-1])
            continue;
        let left=i+1;
        let right=arr.length-1;
        let sum= arr[i]+arr[left]+arr[right]
        while(left<right){

            if(sum===0){

                result.push([arr[i],arr[left],arr[right]])

                while(left<right&& arr[left] === arr[left + 1])left++
                while(left>right&& arr[right] === arr[right - 1])right--
                left++
                right--
            }else if(sum>0){
                left++
            }else{
                right--
            }
        }
    }
    return result
}

console.log(SumOfTriplets(arr));
