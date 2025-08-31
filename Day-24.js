function lengthofLongestSubArray(arr){
    let set =new Set();
    let left=0;
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
        while(set.has(arr[i])){
        set.delete(arr[left])
        left++
    }
    set.add(arr[i])
    maxLength=Math.max(maxLength,i-left+1);

}
return maxLength;
}
console.log(lengthofLongestSubArray("abccabbca"));

