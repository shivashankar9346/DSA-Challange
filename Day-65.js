function sumOfSubArray(arr, target) {
    let prefixSum = 0;
    let seen = new Set();


    for (let num of arr) {
        prefixSum += num;
        if (prefixSum === target) return true;
        if (seen.has(prefixSum - target)) return true;
        seen.add(prefixSum);
    }
    return false;

}
let arr1 = [10, 2, -2, -20, 10];
let target1 = -10;
console.log(subarrayWithGivenSum(arr1, target1));

let arr2 = [1, 4, 20, 3, 10, 5];
let target2 = 33;
console.log(subarrayWithGivenSum(arr2, target2));