function firstNegativeInWindow(A, K) {
    let result = [];
    let queue = []; 

    for (let i = 0; i < A.length; i++) {
        
        if (A[i] < 0) {
            queue.push(i);
        }

        
        if (queue.length > 0 && queue[0] <= i - K) {
            queue.shift();
        }

        
        if (i >= K - 1) {
            if (queue.length > 0) {
                result.push(A[queue[0]]);
            } else {
                result.push(0);
            }
        }
    }

    return result;
}


let A = [12, -1, -7, 8, -15, 30, 16, 28];
let K = 3;

console.log(firstNegativeInWindow(A, K)); 

