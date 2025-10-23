function areArraysEqual(A, B) {

    if (A.length !== B.length) return false;

    let freqA = {};
    let freqB = {};

    for (let num of A) {
        freqA[num] = (freqA[num] || 0) + 1;
    }

    for (let num of B) {
        freqB[num] = (freqB[num] || 0) + 1;
    }

    for (let key in freqA) {
        if (freqA[key] !== freqB[key]) {
            return false;
        }
    }

    return true;
}

let A1 = [1, 2, 5, 4, 0];
let B1 = [2, 4, 5, 0, 1];
console.log(areArraysEqual(A1, B1) ? "Yes" : "No"); 


let A2 = [1, 2, 5];
let B2 = [2, 4, 15];
console.log(areArraysEqual(A2, B2) ? "Yes" : "No");  
