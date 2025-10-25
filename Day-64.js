function firstNonRepeating(arr) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num of arr) {
        if (freq[num] === 1) {
            return num;
        }
    }

    return -1;
}

let arr1 = [9, 4, 9, 6, 7, 4];
console.log(firstNonRepeating(arr1)); 

let arr2 = [1, 2, 3, 2, 1, 3];
console.log(firstNonRepeating(arr2)); 
