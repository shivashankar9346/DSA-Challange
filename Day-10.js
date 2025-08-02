// Problem Statement:
// You're building a calendar integration tool. Two people share their schedules in the form of sorted busy time intervals (start and end times). 
// You need to merge both their busy slots into a single calendar and combine any overlapping or touching intervals.



let userA = [[9, 11], [13, 15], [18, 20]];
let userB = [[10, 12], [14, 16], [17, 18]];

let merge = [...userA, ...userB]; 

let mergeSort = merge.sort((a,b)=>a[0]-b[0])
let start = [mergeSort[0]]

for(let i=0;i<mergeSort.length;i++){
    let left = mergeSort[i];
    let right = start[start.length-1]
    if(left[0]<=right[1]){
        right[1]=Math.max(right[1],left[1])
    }else{
        start.push(left)
    }
}
 console.log(start);
 