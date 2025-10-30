function sumOfDigits(n) {
    if (n === 0) return 0; 
    let lastDigit = n % 10;
    let remaining = Math.floor(n / 10);
    return lastDigit + sumOfDigits(remaining);
}

console.log(sumOfDigits(1234)); 
