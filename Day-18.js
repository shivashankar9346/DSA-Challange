// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, 
// return the length of the longest subarray whose sum is less than or equal to k.

let nums = [4, 2, 1, 7, 8, 1, 2, 8, 1]
let k = 8  

function windowSliding(nums,k){
    let start=0;
    let windowSum=0;
    let maxLength =0;

    for ( let i = 0; i < k ; i++){
        windowSum +=nums[i]

        while(windowSum > k){
            windowSum -= nums[start];
            start++
    
        }
        maxLength= Math.max(maxLength, i-start+1)
    }

    return maxLength;
}
console.log(windowSliding(nums,k));

