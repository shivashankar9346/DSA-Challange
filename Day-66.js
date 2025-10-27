function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let longest = 1;
    let currentStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;

        if (nums[i] === nums[i - 1] + 1) {
            currentStreak++;
        } else {
            longest = Math.max(longest, currentStreak);
            currentStreak = 1; 
        }
    }
    return Math.max(longest, currentStreak);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); 

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));  
