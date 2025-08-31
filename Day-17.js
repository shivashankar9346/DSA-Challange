
// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, 
// return the length of the longest subarray whose sum is less than or equal to k.


// let nums = [2, 1, 5, 1, 3, 2]
// let k = 8  
// function longestSubArray(nums,k){
//     let maxLength=0;
//     for(let i=0;i<nums.length;i++){
//         let sum=0;
//         for(j=i;j<nums.length;j++){
//             sum+=nums[j]
//             if(sum<=k){
//                 maxLength=Math.max(maxLength,j-i+1)

//             }else{
//                 break
//             }
//         }

//     }
//     return maxLength
// }
// console.log(longestSubArray(nums,k));



//print sub arrays

// let nums = [2, 1, 5, 1, 3, 2];
// let k = 8;

// function longestSubArrays(nums, k) {
//     let maxLength = 0;
//     let longestSubs = [];

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum <= k) {
//                 let length = j - i + 1;
//                 if (length > maxLength) {
//                     maxLength = length;
//                     longestSubs = [nums.slice(i, j + 1)]; // reset list
//                 } else if (length === maxLength) {
//                     longestSubs.push(nums.slice(i, j + 1)); // add another
//                 }
//             } else {
//                 break;
//             }
//         }
//     }

//     return longestSubs;
// }

// console.log(longestSubArrays(nums, k));

